import { Model, ModelCtor } from "sequelize/types";
export const Query = {
    personas(
      _parent: any,
      _args: { [key: string]: any },
      context: { models: { [key: string]: ModelCtor<Model<any, any>> }}
    ) {
      const { models } = context 
      return models.Persona.findAll();
    },
    persona(_parent:any, {id}:{id:string}, context: { models: { [key: string]: ModelCtor<Model<any, any>> }}) {
      const { models } = context 
      return models.Persona.findByPk(+id)
    },
    predios(
      _parent: any,
      _args: { [key: string]: any },
      context: { models: { [key: string]: ModelCtor<Model<any, any>> }}
    ) {
      const { models } = context 
      return models.Predio.findAll();
    },
  }