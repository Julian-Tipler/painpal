import { User } from "../../../database/models/User.js";
import { GraphQLError } from "graphql";

export const createUser = async (_, { input }, context) => {
  console.log(context.token);
  const user = await User.create({ ...input });
  console.log(user);
  if (!user) throw new GraphQLError("User not created");

  return user;
};
