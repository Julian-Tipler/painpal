import { Schema, model } from "mongoose";

const questionsSchema = new Schema({
  surveyId: {
    type: Schema.Types.ObjectId,
    ref: "Survey",
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  options: {
    type: [String],
    default: [],
  },
});

export const Question = model("Question", questionsSchema);
