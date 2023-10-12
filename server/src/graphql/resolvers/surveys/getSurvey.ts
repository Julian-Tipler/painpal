import { GraphQLError } from "graphql";
import { Survey } from "../../../database/models/Survey.js";

export const getSurvey = async (_, { input }, context) => {
  const { id } = input;
  const survey = await Survey.findById(id);
  if (!survey) throw new GraphQLError("Survey not found");
  return {
    id: survey._id,
    title: survey.title,
    questions: survey.questions,
  };
};