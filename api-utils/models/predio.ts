import { Sequelize, DataTypes } from 'sequelize';
const sequelize= new Sequelize(process.env.DATABASE_URL,{})

const Predio = sequelize.define('Predio',{
  id:{
    type:DataTypes.INTEGER,
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


export default Predio