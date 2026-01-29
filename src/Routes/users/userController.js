const {Users,Tasks}=require("../../db");
const jwt =require("jsonwebtoken");
const bcrypt=require("bcrypt");





require("dotenv").config()

const getAllUsersController=async()=>{
    return await Users.findAll({include:[{model:Tasks}]})
}

const getOneUserController=async(id)=>{
    const user=await Users.findByPk(id,{include:[{model:Tasks}]});
    if(!user){
        throw Error("no existe este usuario")
    }
    return user
}
const postUsersController=async({name,lastName,email,password})=>{
    if(!email || !password){
        throw Error("faltan datos obligatorios");
    }
    const emailExits=await Users.findOne({where:{email:email}});
    if(emailExits){
        throw Error("El email ya está registrado");
    }
    const saltRounds= await bcrypt.genSalt(10);
    const passwordHash=await bcrypt.hash(password,saltRounds)

    const newUser = await Users.create({
        name,lastName,email,password:passwordHash
    });
    
    const token=  jwt.sign({email:newUser.email},process.env.JWT_SECRET,{expiresIn:"2h"})
    return token;
}
const loginController=async({email,password})=>{
    if(!email || !password){
        throw Error("faltan datos de acceso")
    }
    const user=await Users.findOne({where:{email:email}}); 
    if(!user){
        throw Error("email no existe");
    }
    const isMatch=await bcrypt.compare(password,user.password)
    if(!isMatch){
        throw Error("contraseña incorrecta")
    }
    const token=jwt.sign({email:email},process.env.JWT_SECRET,{expiresIn:"2h"});
    return token;
}
const profileController=async(email)=>{
    
    if(!email){
        throw Error("no existe este email");
    }
    const user=await Users.findOne({where:{email:email},include:[{model:Tasks}]});
    return user;
}
const putUserController=async({id,name,lastName,email,password})=>{
    const userExits=await Users.findByPk(id);
    if(!userExits){
        throw Error("usuario no existe");
    }return await userExits.update({name,lastName,email,password})
}
const deleteUserController=async(id)=>{
      const userExits=await Users.findByPk(id);
    if(!userExits){
        throw Error("usuario no existe");
    }return await userExits.destroy()
}


module.exports={
    getAllUsersController,
    getOneUserController,
    postUsersController,
    putUserController,
    deleteUserController,
    loginController,
    profileController




}