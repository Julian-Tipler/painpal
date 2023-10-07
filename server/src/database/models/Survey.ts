import {Schema, model} from "mongoose";

const surveySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  questions: {
    type: [Schema.Types.ObjectId],
    ref: "Question",
    default: [],
  },
});

export const Survey = model("Survey", surveySchema);