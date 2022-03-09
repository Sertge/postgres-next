export const Terreno = `type Terreno{
  terrArea: Int!
  terrValue: Int!
  ubanOrRural: TerrenoSectorEnum!
  hasWaterSource: Boolean
  hasConstructions: Boolean
  lot: Predio
}`

export const TerrenoInput= `input TerrenoInput{
  terrArea: Int!
  terrValue: Int!
  ubanOrRural: TerrenoSectorEnum!
  hasWaterSource: Boolean
  lot: ID
}` 

export const TerrenoSectorEnum= `enum TerrenoSectorEnum{
  Urbano
  Rural
}`