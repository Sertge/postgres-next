export const Persona =`type Persona{
  id: ID
  docType: String!
  docNumber: Float!
  firstName: String
  lastName: String
  compName: String
  email: String
  address: String
  phoneNumber: Float
  lots: [Predio]
}`

export const DocTypeEnum = `enum DocTypeEnum{
  NIT
  CC
}`

export const PersonaInput= `input PersonaInput {
  id: ID
  docType: DocTypeEnum!
  docNumber: Float!
  email: String
  address: String
  phoneNumber: Float
  firstName: String
  lastName: String
  compName: String
}`