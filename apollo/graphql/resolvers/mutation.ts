import { Model, ModelCtor } from "sequelize/types";
export const Mutation = {
    async CreatePersona(_parent,args:{ [key: string]: any },context: { models: { [key: string]: ModelCtor<Model<any, any>> }}){
      const { models } = context 
      const { input: {
        id,
        docType,
        docNumber,
        firstName,
        lastName,
        compName,
        email,
        address,
        phoneNumber
      }} = args
      if(id) {
        const updatedPersona = await models.Persona.update({
          docType,
          docNumber,
          firstName,
          lastName,
          compName,
          email,
          address,
          phoneNumber
        }, {
          where:{ id },
          returning: true
        })
        return updatedPersona[1][0]
      }
      const createdPersona = await models.Persona.create(
        {
          docType,
          docNumber,
          firstName,
          lastName,
          compName,
          email,
          address,
          phoneNumber
        },
        {
          returning:true
        }
      ).catch(err => console.log(err))
      console.log(createdPersona, 'createdModel')
      return createdPersona
    }
  }