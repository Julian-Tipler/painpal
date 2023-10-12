import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
// import { typeDefs } from "./graphql/typeDefs.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { resolvers } from "./graphql/resolvers/index.js";
import { typeDefs } from "./graphql/typeDefs.js";
import { getUser } from "./database/dataServices/getUser.js";
import { GraphQLError } from "graphql";

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
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const port = parseInt(process.env.PORT || "4000");

const { url } = await startStandaloneServer(server, {
  context: async ({ req }) => {
    // const token = req.headers.authorization || "";

    // const user = await getUser(token);

    // if (!user)
    //   throw new GraphQLError("User is not authenticated", {
    //     extensions: {
    //       code: "UNAUTHENTICATED",
    //       http: { status: 401 },
    //     },
    //   });

    // return { user };
  },
  listen: { port },
});

console.log(`🚀  Server ready at: ${url}`);
