import {Sequelize} from "sequelize/types"

type argsType= {
  [key:string]:string
}

const PredioResolver={
  Query: {
    predios: (_parent:any,_args:argsType,{models}:Sequelize)=>{
      return models.Predio.findAll({
        
      })
    }
  }
}

export default PredioResolver