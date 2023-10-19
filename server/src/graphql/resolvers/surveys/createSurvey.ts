import { GraphQLError } from "graphql";
import { Survey } from "../../../database/models/Survey.js";
import { Question } from "../../../database/models/Question.js";
import { startSession } from "mongoose";

export const createSurvey = async (parent, { input }, context) => {
  const userId = context.user.id;
  const { title } = input;
  const survey = new Survey({
    title,
    userId,
  });

  const questionPromises = input.questionsInput.map(async (questionInput) => {
    const question = new Question({
      ...questionInput,
      surveyId: survey.id,
    });
    await question.save();
    return question;
  });
  const newQuestions = await Promise.all(questionPromises);

  survey.questions = newQuestions.map((question) => question.id);
  await survey.save();

  const newSurvey = await Survey.findById(survey.id).populate("questions");

  return newSurvey;
};
