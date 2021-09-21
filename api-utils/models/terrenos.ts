import { Sequelize, DataTypes } from 'sequelize';
import Predio from './predio';
const sequelize= new Sequelize(process.env.DATABASE_URL,{})

const Terreno = sequelize.define('Terreno',{
  id:{
    type:DataTypes.UUIDV4,
    primaryKey:true,
  },
  terrArea:{
    type:DataTypes.NUMBER,
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
    values:["Urbano","Rural"]
  },
  hasConstructions:{
    type:DataTypes.BOOLEAN,
    defaultValue:false
  }
},
{
  tableName:'Terrenos'
})
Terreno.belongsTo(Predio)

export default Terreno