import { Sequelize, DataTypes } from 'sequelize';
const sequelize= new Sequelize(process.env.DATABASE_URL,{})

const Terreno = sequelize.define('Terreno',{
  terrArea:{
    type:DataTypes.BIGINT,
    allowNull:false,
    validate:{
      isNumeric:{msg:'El campo "area del terreno" solo puede contener números'}
    }
  },
  terrValue:{
    type:DataTypes.BIGINT,
    allowNull:false,
    validate:{
      isNumeric:{msg:'El campo "Avalúo" debe contener un número'}      
    }
  },
  hasWaterSource:{
    type:DataTypes.BOOLEAN,
    defaultValue:false,
  },
  urbanOrRural:{
    type:DataTypes.ENUM,
    allowNull:false,
    values:['Urbano','Rural']
  },
  hasConstructions:{
    type:DataTypes.BOOLEAN,
    defaultValue:false
  }
},
{
  tableName:'Terrenos'
})


export default Terreno