const {Router}=require("express");
const {getAllUsersHandler,getOneUserHandler,postUsersHandler,putUserHandler,deleteUserHandler}=require("./usersHandler")

const userRouter=Router();

userRouter.get("/",getAllUsersHandler);
userRouter.get("/:id",getOneUserHandler);
userRouter.post("/post",postUsersHandler);
userRouter.put("/put/:id",putUserHandler);
userRouter.delete("/delete/:id",deleteUserHandler);


module.exports=userRouter;