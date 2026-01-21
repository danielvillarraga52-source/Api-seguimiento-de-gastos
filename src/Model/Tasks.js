const {DataTypes}=require("sequelize");

module.exports=((sequelize)=>{
    sequelize.define("Tasks",{

        id:{
            type:DataTypes.INTEGER,
            primaryKey:true
        },
        monto:{
            type:DataTypes.FLOAT,

        },
        fecha:{
            type:DataTypes.DATE,
        },
        categoria:{
            type:DataTypes.ENUM(
        'Comestibles',
        'Ocio',
        'Electrónica',
        'Servicios públicos',
        'Ropa',
        'Salud',
        'Otros'
        ),
        allowNull: false,
        defaultValue: 'Otros'
            }

    })
})