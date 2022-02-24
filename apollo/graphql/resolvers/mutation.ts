import { Model, ModelCtor } from "sequelize/types";
export const Mutation = {
    CreatePersona(_parent,args:{ [key: string]: any },context: { models: { [key: string]: ModelCtor<Model<any, any>> }}){
      console.log(args)
      const { models } = context 
      const { input: {
        docType,
        docNumber,
        firstName,
        lastName,
        compName,
        email,
        address,
        phoneNumber
      }} = args
      return models.Persona.create({
        docType,
        docNumber,
        firstName,
        lastName,
        compName,
        email,
        address,
        phoneNumber
      })
    }
  }