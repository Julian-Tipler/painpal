import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { books } from "./graphql/resolvers/books.js";
import { sales } from "./graphql/resolvers/sales.js";
import { MongoClient, ServerApiVersion } from "mongodb";
import { checkMongo } from "./database/checkMongo.js";
import { typeDefs } from "./graphql/typeDefs.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// DATABASE CONNECTION

const uri: string | undefined = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("MongoDB URI not found in environment variables.");
}
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Checks if database is connected
checkMongo(client).catch(console.dir);

export const getClient = () => {
  return client;
};

//GRAPHQL SERVER

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

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

mongoose.connect(uri);

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests

const { url } = await startStandaloneServer(server, {
  context: async ({ req }) => ({ token: req.headers.token }),
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
