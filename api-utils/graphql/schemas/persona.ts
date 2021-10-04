export const Persona =`type Persona{
  docType:String!
  docNumber:Int!
  firstName:String
  lastName:String
  compName:String
  email:String
  address:String
  phoneNumber:Int
  lots:[Predio]
}`

export const DocTypeEnum = `enum DocTypeEnum{
  NIT
  CC
}`

export const PersonaInput= `input PersonaInput {
  docType:DocTypeEnum!
  docNumber:Int!
  email:String
  address:String
  phoneNumber:Int
  firstName:String
  lastName:String
  compName:String
}`