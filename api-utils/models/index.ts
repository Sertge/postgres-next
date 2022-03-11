import {Sequelize} from 'sequelize';
import Persona from './persona';
import Predio from './predio';
import Terreno from './terreno';
import Construccion from './construccion';

const sequelize = new Sequelize(process.env.DATABASE_URL,{
  dialect:'postgres',
  define:{
    underscored:true
  },
  ssl:false
})

sequelize.modelManager.addModel(Persona)
sequelize.modelManager.addModel(Predio)
sequelize.modelManager.addModel(Terreno)
sequelize.modelManager.addModel(Construccion)

Predio.hasOne(Terreno)
Predio.hasMany(Construccion)
Predio.belongsToMany(Persona,{through:'Propietarios'})

Terreno.belongsTo(Predio)
Construccion.belongsTo(Predio)
Persona.belongsToMany(Predio,{through:'Propietarios'})

export default sequelize.models
export const dbsync=()=>sequelize.sync()