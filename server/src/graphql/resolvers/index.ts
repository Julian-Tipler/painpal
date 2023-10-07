import { getSurvey } from "./surveys/getSurvey.js";
import { createSurvey } from "./surveys/createSurvey";
import { updateSurvey } from "./surveys/updateSurvey";
import { deleteSurvey } from "./surveys/deleteSurvey";

export const resolvers = {
  Query: {
    getSurvey,
  },
  Mutation: {
    createSurvey,
    updateSurvey,
    deleteSurvey,
  },
};
