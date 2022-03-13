import { Model, ModelCtor } from "sequelize/types";
export const Mutation = {
    async CreatePersona(_parent, args: { input: { [key: string]: any }}, context: { models: { [key: string]: ModelCtor<Model<any, any>> }}){
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
      if (id) {
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
          where: { id },
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
          returning: true
        }
      )
      return createdPersona.toJSON()
    },
    async CreatePredio(_parent: any, args: { input: { [key: string]: any }}, context: { models: { [key: string]: ModelCtor<Model<any, any>> }} ) {
      const { models } = context
      const { input: {
        id,
        lotValue,
        lotName,
        lotDepartment,
        lotMunicipality
      }} = args
      if (id) {
        const updatedPredio = await models.Predio.update({
          lotValue,
          lotName,
          lotDepartment,
          lotMunicipality
        }, {
          where: { id },
          returning: true
        })
        return updatedPredio[1][0]
      }
      const createdPredio = await models.Predio.create(
        {
          lotValue,
          lotName,
          lotDepartment,
          lotMunicipality
        },
        {
          returning: true
        }
      )
      return createdPredio.toJSON()
    }
  }