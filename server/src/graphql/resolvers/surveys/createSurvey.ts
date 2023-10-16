import { GraphQLError } from "graphql";
import { Survey } from "../../../database/models/Survey.js";
import { Question } from "../../../database/models/Question.js";
import { startSession } from "mongoose";

export const createSurvey = async (_, { input }, context) => {
  const session = await startSession();
  session.startTransaction();

  try {
    let questions = [];
    if (input.questions) {
      await Promise.all(
        input.questions.map(async (question) => {
          const { text, type, options } = question;
          const newQuestion = await Question.create([{ text, type, options }], {
            session,
          });
          if (!newQuestion) {
            throw new Error("Question not created");
          }
          questions.push(newQuestion[0]);
        })
      );
    }

    const { user } = context;
    const survey = await Survey.create(
      [{ userId: user.id, ...input, questions: questions }],
      {
        session,
      }
    );
    if (!survey) {
      throw new Error("Survey not created");
    }

    await session.commitTransaction();
    session.endSession();

    return survey[0];
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    throw error;
  }
};
