import { resolvers } from 'apollo/graphql/resolvers'
import { makeExecutableSchema } from '@graphql-tools/schema';

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
} from "apollo/graphql/schemas";

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