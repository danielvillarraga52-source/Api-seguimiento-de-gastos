const {Users}=require("../../db")
const getAllUsersController=async()=>{
    return await Users.findAll(

    )
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
    const newUser = await Users.create({
        name,lastName,email,password
    });
    return newUser;
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