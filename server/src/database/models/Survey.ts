import {Schema, model} from "mongoose";

const surveySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
});

export const Survey = model("Survey", surveySchema);