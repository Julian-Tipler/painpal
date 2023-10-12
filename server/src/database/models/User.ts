import { Schema, model } from "mongoose";

const usersSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  roles: {
    type: [String],
    required: true,
  }
});

export const User = model("User", usersSchema);
