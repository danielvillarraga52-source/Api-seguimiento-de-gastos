const {DataTypes}=require("sequelize");

module.exports=((sequelize)=>{
    sequelize.define("Tasks",{

        id:{
            type:DataTypes.UUID,
            primaryKey:true,
            defaultValue:DataTypes.UUIDV4
        },
        monto:{
            type:DataTypes.FLOAT,
            defaultValue:0.0,
            

        },
        fecha:{
            type:DataTypes.DATE,
            allowNull:true
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