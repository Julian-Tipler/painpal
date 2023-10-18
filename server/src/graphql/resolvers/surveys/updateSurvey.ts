import { GraphQLError } from "graphql";
import { Survey } from "../../../database/models/Survey.js";
import { Question } from "../../../database/models/Question.js";
import { Types, startSession } from "mongoose";

export const updateSurvey = async (_, { input }, context) => {
  const { id, questions } = input;

  const session = await startSession();
  session.startTransaction();

  try {
    if (questions) {
      questions.forEach(async (question) => {
        try {
          const newQuestion = await Question.findByIdAndUpdate(
            question.id,
            // { ...question },
            // { new: true }
          );
          // if (!newQuestion) throw new GraphQLError("Question not updated");
        } catch (error) {
          console.log(error);
        }
      });
    }

    const survey = await Survey.findByIdAndUpdate(
      id,
      { ...input },
      { new: true }
    ).populate("questions");
    if (!survey) throw new GraphQLError("Survey not updated");

    return survey;
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    throw error;
  }
};
