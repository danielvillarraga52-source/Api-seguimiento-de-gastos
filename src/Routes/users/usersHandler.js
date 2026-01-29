const {getAllUsersController,
    getOneUserController,
    postUsersController,
    putUserController,
    deleteUserController,
    loginController,
    profileController}=require("./userController")


const getAllUsersHandler=async(req,res)=>{
    try {
        const allUsers=await getAllUsersController();
        res.status(200).json(allUsers);
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}
const getOneUserHandler=async(req,res)=>{
    const {id}=req.params;
     try {
        const oneUser=await getOneUserController(id);
        res.status(200).json(oneUser);
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}
const postUsersHandler=async(req,res)=>{
    const {name,lastName,email,password}=req.body;
     try {
        const newUser=await postUsersController({name,lastName,email,password})
        res.status(200).json({
            "message":"creado con exito",
            "user":newUser
        });
    } catch (error) {
        res.status(400).json({error:error.message})
    }
};

const loginHandler=async(req,res)=>{
    const {email,password}=req.body;
    try {
        const accessLogin=await loginController({email,password});
        res.status(200).json({"message":"logueado con exito",user:accessLogin});
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}
const profileHandler=async(req,res)=>{
    const email=req.email;
    
    try {
        const verifyUser=await profileController(email);
        console.log(verifyUser)
        res.status(200).json({"verificado":true,user:verifyUser});
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}
const putUserHandler=async(req,res)=>{
    const {id}=req.params;
    const{name,lastName,email,password}=req.body;
     try {
        const updateUser=await putUserController({id,name,lastName,email,password})
       
        res.status(200).json(updateUser);
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}
const deleteUserHandler=async(req,res)=>{
    const {id}=req.params;
     try {
        const deleteUser=await deleteUserController(id)
        res.status(200).json(deleteUser);
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}
module.exports={
    getAllUsersHandler,
    getOneUserHandler,
    postUsersHandler,
    putUserHandler,
    deleteUserHandler,
    loginHandler,
    profileHandler




}