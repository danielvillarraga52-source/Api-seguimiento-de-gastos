const {Sequelize}=require("sequelize");
const userModel=require("./Model/Users");
const tasksModel=require("./Model/Tasks");



require("dotenv").config();
const {DB_USER,DB_PASSWORD,DB_HOST,DB_PORT,DB_NAME}=process.env
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,{logging:false});

userModel(sequelize);
tasksModel(sequelize);
const {Users,Tasks}=sequelize.models;
Users.hasMany(Tasks);
Tasks.belongsTo(Users);
module.exports={
    ...sequelize.models,
    conn:sequelize
}
