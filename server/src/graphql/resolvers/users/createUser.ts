import { GraphQLError } from "graphql";
import { User } from "../../../database/models/User";

export const createUser = async (_, { input }, context) => {
  const { title, questions } = input;

  const user = await User.create({ title, questions });
  if (!user) throw new GraphQLError("User not created");

  return user;
};
