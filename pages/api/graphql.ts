import { ApolloServer } from 'apollo-server-micro'
import { schema } from  'apollo/graphql/schema'
import Cors from 'micro-cors'

const cors = Cors()
const apolloServer = new ApolloServer({ 
  schema,
  context(ctx) {
    return ctx
  }
})

export const config = {
  api: {
    bodyParser: false
  },
}

const startServer = apolloServer.start()

export default cors(
  async function handler(req, res) {
    if (req.method === 'OPTIONS') {
      res.end();
      return false
    }
    await startServer;
    await apolloServer.createHandler({
      path: '/api/graphql'
    })(req, res)
  }
)