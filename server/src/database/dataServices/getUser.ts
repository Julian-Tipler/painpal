import { GraphQLError } from "graphql";
import { User } from "../models/User.js";
import jwt from "jsonwebtoken";

export const getUser = async (token) => {
  try {
    const {userId} = verifyToken(token);
    const user = await findUserById(userId);
    return user;
  } catch (error) {
    throw new GraphQLError(error.message);
  }
};

const verifyToken = (token) => {
  try {
    const userId = jwt.verify(token, process.env.SECRET_KEY);
    return userId;
  } catch (error) {
    throw new Error("Invalid token");
  }
};

const findUserById = async (userId) => {
  try {
    const user = await User.findById(userId);

    if (!user) {
      throw new Error("User ID not recognized");
    }

    return user;
  } catch (error) {
    throw new Error("Error finding user");
  }
};
