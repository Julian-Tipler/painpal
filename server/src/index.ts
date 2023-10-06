import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { books } from "./resolvers/books.js";
import { sales } from "./resolvers/sales.js";
import { MongoClient, ServerApiVersion } from "mongodb";

const uri =
  "mongodb+srv://tiplerjulian:9Hk24eXK5vhCfero@cluster0.a6irpmz.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

export const getClient = () => {
  return client;
};

//GRAPHQL SERVER

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  type Book {
    _id: String
    title: String
    author: String
  }

  type Sale {
    _id: String
    item: String
    price: Int
    quantity: Int
  }

  type Query {
    books: [Book]
    sales: [Sale]
  }
`;

const resolvers = {
  Query: {
    //This would be replaced with actual database calls
    books: books,
    sales: sales,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests

const { url } = await startStandaloneServer(server, {
  context: async ({ req }) => ({ token: req.headers.token }),
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
