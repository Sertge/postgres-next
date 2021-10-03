import { ApolloServer } from "apollo-server-micro";
import { NextApiRequest, NextApiResponse } from "next";
import models /*,{dbsync}*/ from "api-utils/models";
// import { makeExecutableSchema } from "graphql-tools";
import { Model, ModelCtor } from "sequelize/types";
import {
  Construccion,
  Persona,
  Predio,
  Query,
  Terreno,
  ConstruccionInput,
  ConstructionUseEnum,
  DocTypeEnum,
  PersonaInput,
  PredioInput,
  TerrenoInput,
  TerrenoSectorEnum
} from "api-utils/graphql/schemas";

const resolvers = {
  Query: {
    personas(
      _parent: any,
      _args: { [key: string]: any },
      context: { [key: string]: ModelCtor<Model<any, any>> }
    ) {
      return context.Persona.findAll();
    },
    predios(
      _parent: any,
      _args: any,
      context: { [key: string]: ModelCtor<Model<any, any>> }
    ) {
      return context.Predio.findAll();
    },
  },
};

// console.log(models)
const apolloServer = new ApolloServer({
  typeDefs: [
    Persona,
    Terreno,
    Construccion,
    Predio,
    Query,
    ConstruccionInput,
    ConstructionUseEnum,
    DocTypeEnum,
    PersonaInput,
    PredioInput,
    TerrenoInput,
    TerrenoSectorEnum
  ],
  resolvers,
  context: {
    models,
  },
  // consider adding auth
  // context: ({ req }) => ({
  //   authScope: getScope(req.headers.authorization)
  // })
});

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
