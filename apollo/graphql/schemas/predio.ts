export const Predio = `type Predio {
  id: ID
  lotName: String!
  lotDepartment: String!
  lotMunicipality: String!
  lotValue: Int!
  constructions: [Construccion!]
  owners: [Persona!]
  land: [Terreno!]
}`

export const PredioInput = `input PredioInput{
  id: ID
  lotName: String
  lotDepartment: String
  lotMunicipality: String
  lotValue: Int
}`