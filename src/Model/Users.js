const  {DataTypes}=require("sequelize");
module.exports=((sequelize)=>{
    sequelize.define("Users",{
        id:{
            type:DataTypes.UUID,
            primaryKey:true,
            defaultValue:DataTypes.UUIDV4
        },
        name:{
            type:DataTypes.STRING,
            allowNull:true
        },
        lastName:{
            type:DataTypes.STRING,
            allowNull:true
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true

        },
        password:{
            type:DataTypes.STRING,
            unique:true
        }
    })
})