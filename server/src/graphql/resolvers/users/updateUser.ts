import { GraphQLError } from "graphql";
import { User } from "../../../database/models/User.js";

export const updateUser = async (_, { input }, context) => {
  const { id, title, questions } = input;

  const user = await User.findByIdAndUpdate(
    id,
    { ...input },
    { new: true }
  );
  if (!user) throw new GraphQLError("User not updated");

  return user;
};
