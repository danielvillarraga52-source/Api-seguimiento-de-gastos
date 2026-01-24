const {Router}=require("express");
const userRouter=require("./users/userRouter")
const  taskRouter=require("./tasks/tasksRouter")
const mainRouter=Router();

mainRouter.use("/users",userRouter);
mainRouter.use("/tasks",taskRouter);


module.exports=mainRouter;