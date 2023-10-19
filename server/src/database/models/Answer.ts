import { Schema, model } from "mongoose";

const answerSchema = new Schema({
  responseId: {
    type: Schema.Types.ObjectId,
    ref: "Survey",
    required: true,
  },
  selectedOptions: {
    type: [String],
    default: [],
  },
});

export const Answer = model("Answer", answerSchema);
