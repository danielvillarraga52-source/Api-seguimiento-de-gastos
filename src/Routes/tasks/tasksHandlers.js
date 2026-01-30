const {getAllTasksController,postTaskController,getTaskController,deleteTaskController,updateTaskController}=require("./tasksController")
const getAllTasksHandler=async(req,res)=>{
    const {filtro,fechaInicio,FechaFin}=req.query;
    try {
        const allTasks=await getAllTasksController({filtro,fechaInicio,FechaFin});
        res.status(200).json(allTasks);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};
const postTasksHandler=async(req,res)=>{
    const {monto,fecha,categoria,UserId}=req.body;
    
    try {
        const postTasks=await postTaskController({monto,fecha,categoria,UserId});
        res.status(200).json(postTasks);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};
const getTaskHandler=async(req,res)=>{
    const {id}=req.params;
    try {
        const oneTask=await getTaskController({id});
        res.status(200).json(oneTask);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};
const deleteTaskHandler=async(req,res)=>{
    const {id}=req.params;

    try {
        const deleteTask=await deleteTaskController({id});
        res.status(200).json({"task":deleteTask,"mssg":"tarea eliminada"});
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};
const updateTakHandler=async(req,res)=>{
    const {id}=req.params;
    const {monto,fecha,categoria}=req.body;
    try {
        const postTask=await updateTaskController({id,monto,fecha,categoria});
        res.status(200).json(postTask);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};
module.exports={
    getAllTasksHandler,
    postTasksHandler,
    getTaskHandler,
    deleteTaskHandler,
    updateTakHandler

}