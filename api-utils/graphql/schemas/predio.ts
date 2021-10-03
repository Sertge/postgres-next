export const Predio = `type Predio {
  lotName:String
  lotDepartment:String
  lotMunicipality:String
  lotValue:Int
  constructions:[Construccion]
  owners:[Persona]
  land:[Terreno]
}`