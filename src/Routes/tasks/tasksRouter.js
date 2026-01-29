const {Router}=require("express");
const {getAllTasksHandler,postTasksHandler,getTaskHandler,deleteTaskHandler,updateTakHandler}=require("./tasksHandlers");
const taskRouter=Router();

taskRouter.get("/",getAllTasksHandler);
taskRouter.post("/post",postTasksHandler);
taskRouter.get("/:id",getTaskHandler);
taskRouter.delete("/delete/:id",deleteTaskHandler);
taskRouter.put("/update:id",updateTakHandler);


module.exports=taskRouter;