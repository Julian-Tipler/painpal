import { Survey } from "../../../database/models/Survey.js";

export const getSurvey = async (_, args, context) => {
  const surveys = await Survey.find();
  return surveys;
};
