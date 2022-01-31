import { makeExecutableSchema } from "graphql-tools";
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
  TerrenoSectorEnum,
  Mutation
} from "api-utils/graphql/schemas";

import { resolvers } from 'api-utils/graphql/resolvers'

export const schema = makeExecutableSchema({
  typeDefs: [
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
    TerrenoSectorEnum,
    Mutation
  ],
  resolvers
})