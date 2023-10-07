import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./graphql/typeDefs.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { getSurvey } from "./graphql/resolvers/surveys/getSurvey.js";
import { createSurvey } from "./graphql/resolvers/surveys/createSurvey.js";
import { updateSurvey } from "./graphql/resolvers/surveys/updateSurvey.js";
import { deleteSurvey } from "./graphql/resolvers/surveys/deleteSurvey.js";

dotenv.config();

// DATABASE CONNECTION

const uri: string | undefined = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("MongoDB URI not found in environment variables.");
}

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

//GRAPHQL SERVER

const resolvers = {
  Query: {
    getSurvey,
  },
  Mutation: {
    createSurvey,
    updateSurvey,
    deleteSurvey,
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

const port = parseInt(process.env.PORT || "4000");

const { url } = await startStandaloneServer(server, {
  context: async ({ req }) => ({ token: req.headers.token }),
  listen: { port },
});

console.log(`🚀  Server ready at: ${url}`);
