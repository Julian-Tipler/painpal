import { GraphQLError } from "graphql";
import { Survey } from "../../../database/models/Survey.js";

export const updateSurvey = async (_, { input }, context) => {
  const { id } = input;

  const survey = await Survey.findByIdAndUpdate(
    id,
    { ...input },
    { new: true }
  );
  if (!survey) throw new GraphQLError("Survey not updated");

  return survey;
};
