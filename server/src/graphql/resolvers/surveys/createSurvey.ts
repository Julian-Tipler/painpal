import { GraphQLError } from "graphql";
import { Survey } from "../../../database/models/Survey.js";

export const createSurvey = async (_, { input }, context) => {
  const { title, questions } = input;

  const survey = await Survey.create({ title, questions });
  if (!survey) throw new GraphQLError("Survey not created");

  return survey;
};
