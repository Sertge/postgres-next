import { ApolloServer } from "apollo-server-micro";
import models /*,{dbsync}*/ from "api-utils/models";
import { schema } from "api-utils/graphql/schema";
import { NextApiRequest, NextApiResponse } from "next";
// import { Model, ModelCtor } from "sequelize/types";
// import {
//   Construccion,
//   Persona,
//   Predio,
//   Query,
//   Terreno,
//   ConstruccionInput,
//   ConstructionUseEnum,
//   DocTypeEnum,
//   PersonaInput,
//   PredioInput,
//   TerrenoInput,
//   TerrenoSectorEnum,
//   Mutation
// } from "api-utils/graphql/schemas";

// const resolvers = {
//   Query: {
//     personas(
//       _parent: any,
//       _args: { [key: string]: any },
//       context: { models: { [key: string]: ModelCtor<Model<any, any>> }}
//     ) {
//       const { models } = context 
//       return models.Persona.findAll();
//     },
//     persona(_parent:any, {id}:{id:string}, context: { models: { [key: string]: ModelCtor<Model<any, any>> }}) {
//       const { models } = context 
//       return models.Persona.findByPk(+id)
//     },
//     predios(
//       _parent: any,
//       _args: { [key: string]: any },
//       context: { models: { [key: string]: ModelCtor<Model<any, any>> }}
//     ) {
//       const { models } = context 
//       return models.Predio.findAll();
//     },
//   },
//   Mutation:{
//     CreatePersona(_parent,args:{ [key: string]: any },context: { models: { [key: string]: ModelCtor<Model<any, any>> }}){
//       console.log(args)
//       const { models } = context 
//       const { input: {
//         docType,
//         docNumber,
//         firstName,
//         lastName,
//         compName,
//         email,
//         address,
//         phoneNumber
//       }} = args
//       return models.Persona.create({
//         docType,
//         docNumber,
//         firstName,
//         lastName,
//         compName,
//         email,
//         address,
//         phoneNumber
//       })
//     }
//   }
// };

// console.log(models)
const apolloServer = new ApolloServer({
  // typeDefs: [
  //   Persona,
  //   Terreno,
  //   Construccion,
  //   Predio,
  //   Query,
  //   ConstruccionInput,
  //   ConstructionUseEnum,
  //   DocTypeEnum,
  //   PersonaInput,
  //   PredioInput,
  //   TerrenoInput,
  //   TerrenoSectorEnum,
  //   Mutation
  // ],
  // resolvers,
  schema,
  context: {
    models,
  },
  // consider adding auth
  // context: ({ req }) => ({
  //   authScope: getScope(req.headers.authorization)
  // })
});

// export default apolloServer.createHandler({ path: '/api/graphql' })

const startServer = apolloServer.start();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://studio.apollographql.com"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }

  // await dbsync()
  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
}
export const config = {
  api: {
    bodyParser: false,
  },
};
