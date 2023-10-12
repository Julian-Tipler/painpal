import { GraphQLError } from "graphql";

export const createUser = async (_, { input }, context) => {
  const { title, questions } = input;

  const survey = await User.create({ title, questions });
  if (!survey) throw new GraphQLError("User not created");

  return survey;
};
