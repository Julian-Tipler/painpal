import { GraphQLError } from "graphql";
import { Survey } from "../../../database/models/Survey.js";
import { canAccessSurvey } from "../../../permissions/canAccessSurvey.js";

export const getSurvey = async (_, { input }, context) => {
  const { id } = input;

  const survey = await Survey.findById(id).populate("questions");
  if (!survey) throw new GraphQLError("Survey not found");

  canAccessSurvey({ survey, user: context.user });

  return survey;
};
