import { GraphQLError } from "graphql";
import { Survey } from "../../../database/models/Survey.js";

export const createSurvey = async (_, { input }, context) => {
  const { user } = context;
  const survey = await Survey.create({ userId: user.id, ...input });
  if (!survey) throw new GraphQLError("Survey not created");

  return survey;
};
