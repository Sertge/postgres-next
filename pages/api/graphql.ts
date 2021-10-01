import {ApolloServer, gql} from 'apollo-server-micro'
import { NextApiRequest, NextApiResponse } from 'next'
import models,{dbsync} from 'api-utils/models'

const typeDefs = gql`
  type Query {
    personas: [Persona!]
  }
  type Persona {
    name:String
  }
`
const resolvers = {
  Query:{
    personas(_parent:any,_args:any,_context:any){
      return [{name:_context.Persona.firstName}]
    }
  }
}
// console.log(models)
const apolloServer= new ApolloServer({
  typeDefs,
  resolvers,
  context:{
    models
  }
  // consider adding auth
  // context: ({ req }) => ({
  //   authScope: getScope(req.headers.authorization)
  // })
})

const startServer = apolloServer.start()

export default async function handler(req:NextApiRequest,res:NextApiResponse) {
  res.setHeader('Access-Control-Allow-Credentials','true')
  res.setHeader(
    'Access-Control-Allow-Origin',
    'https://studio.apollographql.com'
  )
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  if(req.method==='OPTIONS'){
    res.end()
    return false
  }
  
  // await dbsync()
  await startServer
  await apolloServer.createHandler({
    path: '/api/graphql'
  })(req,res)
}
export const config = {
  api: {
    bodyParser:false,
  }
}