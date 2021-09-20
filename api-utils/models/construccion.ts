import { Sequelize, DataTypes } from 'sequelize';
const sequelize= new Sequelize(process.env.DATABASE_URL,{})

const Construccion = sequelize.define('Construccion',{
  id:{
    type:DataTypes.UUIDV4,
    primaryKey:true,
  },
  floorAmount:{
    type:DataTypes.NUMBER,
    allowNull:false,
    validate:{
      min:{args:[0],msg:'El campo "Número de pisos" no puede ser negativo'},
      max:{args:[100],msg:'El campo "Número de pisos" no puede ser mayor a 100'}
    }
  },
  totalArea:{
    type:DataTypes.NUMBER,
    allowNull:false,
    validate:{
      isNumeric:{msg:'El campo "area total" solo puede contener números'}
    }
  },
  constructionUse:{
    type:DataTypes.ENUM,
    allowNull:false,
    values:["Comercial", "Residencial", "Industrial","Mixto"]
  },
  address:{
    type:DataTypes.STRING,
    allowNull:false
  },
},{
  tableName:'Construcciones'
})

export default Construccion