import { ApolloServer } from 'apollo-server-micro'
import { schema } from  'apollo/graphql/schema'

const { typeDefs, resolvers } = schema
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context(ctx) {
    return ctx
  }
})

export const config = {
  api: {
    bodyParser: false
  },
}

export default apolloServer.createHandler({ path: '/api/graphql' })