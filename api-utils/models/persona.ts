import { Sequelize, DataTypes } from 'sequelize';
const sequelize= new Sequelize(process.env.DATABASE_URL,{})

const Persona = sequelize.define('Persona',{
  id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
  },
  docType:{
    type:DataTypes.ENUM,
    values:["CC","NIT"],
    allowNull:false,
    validate:{
      is:{
        args:/CC|NIT/,
        msg:'Tipo de documento debe ser "NIT" o "CC"'
      }
    }
  },
  docNumber:{
    type:DataTypes.BIGINT,
    allowNull:false,
    validate:{
      isNumeric:{msg:"Numbero de documento debe ser un valor numérico"}
    }
  },
  firstName:{
    type: DataTypes.STRING,
    validate:{
      customValidator(value:string|null){
        if (value===null && this.docType=="CC"){
          throw new Error('El campo "Nombre" es obligatorio para persona natural')
        }else if(typeof value == "string" && (value.length>25||value.length<2)){
          throw new Error('El campo "Nombre" debe contener entre 2 y 25 caracteres')
        }
      }
    }
  },
  lastName:{
    type:DataTypes.STRING,
    validate:{
      customValidator(value:string|null){
        if (value===null && this.docType=="CC"){
          throw new Error('El campo "Apellido" es obligatorio para persona natural')
        }else if(typeof value == "string" && (value.length>25||value.length<2)){
          throw new Error('El campo "Apellido" debe contener entre 2 y 25 caracteres')
        }
      }
    }
  },
  compName:{
    type:DataTypes.STRING,
    validate:{
      customValidator(value:string|null){
        if (value===null && this.docType=="NIT"){
          throw new Error('El campo "Razón social" es obligatorio para persona jurídica')
        }else if(typeof value == "string" && (value.length>25||value.length<2)){
          throw new Error('El campo "Razón social" debe contener entre 5 y 25 caracteres')
        }
      }
    }
  },
  email:{
    type:DataTypes.STRING,
    validate:{
      isEmail:{msg:"Correo electrónico tiene formato inválido"}
    }
  },
  address:{
    type:DataTypes.STRING,
    allowNull:false
  },
  phoneNumber:{
    type:DataTypes.BIGINT,
    validate:{
      // Esto se adapta al nuevo formato de números telefónicos,
      // basado en 10 dígitos de longitud:
      // Para fijos: 60+(Indicativo ciudad)+(Numero telefónico)
      // Para celulares: 10 dígitos del número (comienza en 3).
      min:{msg:"Teléfono muy corto, use formato de 10 dígitos",args:[3000000000]},
      max:{msg:"Teléfono muy largo, use formato de 10 dígitos",args:[6999999999]},
      isNumeric:{msg:"Telefono inválido, incluya número en formato de 10 dígitos"}
    }
  }  
},{
  tableName:"Personas"
})


export default Persona