import { Survey } from "../../../database/models/Survey.js";
import { GraphQLError } from "graphql";

export const deleteSurvey = async (_, args, context) => {
  const { id } = args;
  const survey = await Survey.findByIdAndDelete(id);
  if(!survey) throw new GraphQLError("Survey not found");
  console.log(survey)
  return id;
};
