const {Router}=require("express");
const {getAllUsersHandler,profileHandler,loginHandler,getOneUserHandler,postUsersHandler,putUserHandler,deleteUserHandler}=require("./usersHandler")
const {verifyToken}=require("../../utils/middlewarejwt");
const userRouter=Router();

userRouter.get("/",getAllUsersHandler);
userRouter.post("/register",postUsersHandler);
userRouter.post("/login",loginHandler);
userRouter.get("/profile",verifyToken,profileHandler);
userRouter.get("/:id",getOneUserHandler);
userRouter.put("/put/:id",putUserHandler);
userRouter.delete("/delete/:id",deleteUserHandler);


module.exports=userRouter;