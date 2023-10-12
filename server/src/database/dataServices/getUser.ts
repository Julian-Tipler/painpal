import { GraphQLError } from "graphql";
import { User } from "../models/User.js";
import jwt from "jsonwebtoken";

export const getUser = async (token) => {
  try {
    const { userId } = jwt.verify(token, "your-secret-key"); // Use your secret key here

    const user = await User.findById(userId);
    if (!user) {
      throw new GraphQLError("User not found");
    }

    return user;
  } catch (error) {
    // Handle token verification errors
    throw new GraphQLError("Invalid token");
  }
};
