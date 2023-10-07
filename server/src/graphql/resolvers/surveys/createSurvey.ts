import { GraphQLError } from "graphql";
import { Survey } from "../../../database/models/Survey.js";

export const createSurvey = async (_, args, context) => {
  const { title } = args;
  const survey = await Survey.create({ title });
  if (!survey) throw new GraphQLError("Survey not created");
  return survey;
};
