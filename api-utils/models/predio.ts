import { Sequelize, DataTypes } from 'sequelize';
import Terreno from './terrenos';
import Construccion from './construccion';
import Persona from './Persona';
const sequelize= new Sequelize(process.env.DATABASE_URL,{})

const Predio = sequelize.define('Predio',{
  id:{
    type:DataTypes.UUIDV4,
    primaryKey:true,
  },
  lotValue:{
    type:DataTypes.BIGINT,
    allowNull:false,
    validate:{
      isNumeric:{msg:'El campo "Avalúo" debe contener un número'}      
    }
  },
  lotName:{
    type:DataTypes.STRING,
    allowNull:false,
    validate:{
      isAlphanumeric:{msg:'El campo "nombre del predio" es inválido'},
    }
  },
  lotDepartment:{
    type:DataTypes.STRING,
    allowNull:false,
    validate:{
      isAlpha:{msg:'El campo "Departamento" es inválido'}
    }
  },
  lotMunicipality:{
    type:DataTypes.STRING,
    allowNull:false,
    validate:{
      isAlpha:{msg:'El campo "Municipio" es inválido'}
    }
  }
},{
  tableName:'Predios'
})

Predio.hasOne(Terreno)
Predio.hasMany(Construccion)
Predio.belongsToMany(Persona,{through:'Propietarios'})

export default Predio