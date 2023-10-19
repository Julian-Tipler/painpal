import { Question } from "../../../database/models/Question.js";
import { Survey } from "../../../database/models/Survey.js";
import { GraphQLError } from "graphql";

export const deleteSurvey = async (_, { input }, context) => {
  const { id } = input;

  await Question.deleteMany({ surveyId: id });

  const survey = await Survey.findByIdAndDelete(id);
  if (!survey) throw new GraphQLError("Survey not found");

  return id;
};
