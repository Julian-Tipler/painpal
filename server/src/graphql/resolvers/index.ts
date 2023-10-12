import { getSurvey } from "./surveys/getSurvey.js";
import { createSurvey } from "./surveys/createSurvey.js";
import { updateSurvey } from "./surveys/updateSurvey.js";
import { deleteSurvey } from "./surveys/deleteSurvey.js";
import { createUser } from "./users/createUser.js";
import { updateUser } from "./users/updateUser.js";
import { deleteUser } from "./users/deleteUser.js";

export const resolvers = {
  Query: {
    getSurvey,
  },
  Mutation: {
    createSurvey,
    updateSurvey,
    deleteSurvey,
    createUser,
    updateUser,
    deleteUser,
  },
};
