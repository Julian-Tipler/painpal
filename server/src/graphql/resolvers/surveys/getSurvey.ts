import { GraphQLError } from "graphql";
import { Survey } from "../../../database/models/Survey.js";

export const getSurvey = async (_, { input }, context) => {
  const { id } = input;

  const survey = await Survey.findById(id);
  if (!survey) throw new GraphQLError("Survey not found");

  if (survey.userId !== context.user.id)
    throw new GraphQLError("User is unauthorized to view this Survey");

  return survey;
};
