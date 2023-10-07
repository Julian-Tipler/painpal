import { GraphQLError } from "graphql";
import { Survey } from "../../../database/models/Survey.js";

export const updateSurvey = async (_, args, context) => {
  const survey = await Survey.findByIdAndUpdate(args.id, args);
  if (!survey) throw new GraphQLError("Survey not updated");
  return survey;
};
