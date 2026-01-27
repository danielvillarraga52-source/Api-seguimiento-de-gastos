const {Users}=require("../../db");
const jwt =require("jsonwebtoken");



require("dotenv").config()
const getAllUsersController=async()=>{
    return await Users.findAll()
}

const getOneUserController=async(id)=>{
    const user=await Users.findByPk(id)
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
    const newUser = await Users.create({
        name,lastName,email,password
    });
    console.log("Mi secreto es:", process.env.JWT_SECRET);
    const token=  jwt.sign({id: newUser.id,email:newUser.email},process.env.JWT_SECRET,{expiresIn:"2h"})
    return token;
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
    deleteUserController




}