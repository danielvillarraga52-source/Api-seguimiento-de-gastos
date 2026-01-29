const {Tasks,Users}=require("../../db");



const getAllTasksController=async()=>{
    return await Tasks.findAll({
        
        attributes: { 
            exclude: ["UserId"] 
        },
        include: [{
            model: Users,
            
            attributes: { exclude: ["password"] } 
        }]
    })
};
const postTaskController=async({monto,fecha,categoria,UserId})=>{

    if(!fecha){
        throw Error("faltan datos necesarios")
    }
    const registerTask=await Tasks.create({
        monto,
        fecha,
        categoria,
        UserId
    });
    return registerTask;

};
const getTaskController=async ({id})=>{
    if(!id){
        throw Error("no existe esta gasto")
    }
    return await Tasks.findByPk(id,{include:[{model:Users}]})
};
const deleteTaskController=async({id})=>{
    const taskExits=await Tasks.findByPk(id);
    if(!taskExits){
        throw Error("no se encontro gasto")
    }
    await taskExits.destroy();
    return taskExits;
};
const updateTaskController=async({id,monto,fecha,categoria})=>{
     const taskExits=await Tasks.findByPk(id);
     if(!taskExits){
        throw Error("NO  EXISTE TAREA O GASTO");
     }return await taskExits.update({
        monto,
        fecha,
        categoria
     })
};


module.exports={
    getAllTasksController,
    postTaskController,
    getTaskController,
    deleteTaskController,
    updateTaskController
}