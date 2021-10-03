export const Construccion = `type Construccion {
  floorAmount:Int!
  totalArea:Int!
  constructionUse:ConstructionUseEnum!
  address:String
  lot:Predio!
}`

export const ConstruccionInput = `input ConstruccionInput{
  floorAmount:Int!
  totalArea:Int!
  constructionUse:ConstructionUseEnum!
  address:String
}`

export const ConstructionUseEnum = `enum ConstructionUseEnum{
  Comercial
  Residencial
  Industrial
  Mixto
}`