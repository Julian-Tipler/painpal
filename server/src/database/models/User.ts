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
  },
  createdAt: {
    type: Date,
    immutable: true,
    required: true,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    immutable: true,
    required: true,
    default: Date.now(),
  },
});

export const User = model("User", usersSchema);
