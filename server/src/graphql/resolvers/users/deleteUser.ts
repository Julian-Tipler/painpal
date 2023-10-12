import { User } from "../../../database/models/User.js";
import { GraphQLError } from "graphql";

export const deleteUser = async (_, { input }, context) => {
  const { id } = input;

  const user = await User.findByIdAndDelete(id);
  if (!user) throw new GraphQLError("User not found");

  return id;
};
