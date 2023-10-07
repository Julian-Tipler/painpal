import { getSurvey } from "./surveys/getSurvey.js";
import { createSurvey } from "./surveys/createSurvey.js";
import { updateSurvey } from "./surveys/updateSurvey.js";
import { deleteSurvey } from "./surveys/deleteSurvey.js";

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
