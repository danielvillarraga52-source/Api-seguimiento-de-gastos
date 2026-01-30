const {Tasks,Users}=require("../../db");
const { Op } = require("sequelize"); // Importante: necesitamos los operadores

const getAllTasksController = async (filtro, fechaInicio, fechaFin) => {
    let whereClause = {};
    const hoy = new Date();

    // Lógica para determinar el rango de fechas
    if (filtro === "semana") {
        const haceUnaSemana = new Date();
        haceUnaSemana.setDate(hoy.getDate() - 7);
        whereClause.fecha = { [Op.gte]: haceUnaSemana };
    } 
    else if (filtro === "mes") {
        const haceUnMes = new Date();
        haceUnMes.setMonth(hoy.getMonth() - 1);
        whereClause.fecha = { [Op.gte]: haceUnMes };
    } 
    else if (filtro === "3_meses") {
        const haceTresMeses = new Date();
        haceTresMeses.setMonth(hoy.getMonth() - 3);
        whereClause.fecha = { [Op.gte]: haceTresMeses };
    } 
    else if (filtro === "personalizado" && fechaInicio && fechaFin) {
        whereClause.fecha = { [Op.between]: [new Date(fechaInicio), new Date(fechaFin)] };
    }

    return await Tasks.findAll({
        where: whereClause, // Aplicamos el filtro aquí
        attributes: { exclude: ["UserId"] },
        include: [{
            model: Users,
            attributes: { exclude: ["password"] }
        }]
    });
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