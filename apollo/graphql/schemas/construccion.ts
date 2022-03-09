export const Construccion = `type Construccion {
  id: ID
  floorAmount: Int!
  totalArea: Int!
  constructionUse: ConstructionUseEnum!
  address: String
  lot: Predio!
}`

export const ConstruccionInput = `input ConstruccionInput{
  id: ID
  floorAmount: Int
  totalArea: Int
  constructionUse: ConstructionUseEnum
  address: String
  lot: ID
}`

export const ConstructionUseEnum = `enum ConstructionUseEnum{
  Comercial
  Residencial
  Industrial
  Mixto
}`