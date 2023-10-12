import { GraphQLError } from "graphql";
import { Survey } from "../../../database/models/Survey.js";

export const createSurvey = async (_, { input }, context) => {
  const survey = await Survey.create({ ...input });
  if (!survey) throw new GraphQLError("Survey not created");

  return survey;
};
