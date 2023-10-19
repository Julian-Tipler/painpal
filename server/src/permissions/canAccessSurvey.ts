import { GraphQLError } from "graphql";
import { isAdmin } from "./isAdmin.js";

export const canAccessSurvey = ({ survey, user }) => {
  if (isAdmin(user)) return true;
  if (survey.userId !== user.id)
    throw new GraphQLError("User is unauthorized to view this Survey");
};
