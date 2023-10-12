import { User } from "../../../database/models/User.js";
import { GraphQLError } from "graphql";

export const createUser = async (_, { input }, context) => {

  const user = await User.create({ ...input });
  if (!user) throw new GraphQLError("User not created");

  return user;
};
