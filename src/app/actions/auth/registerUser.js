"use server";

import dbConnect, { collectionNameObj } from "@/library/dbConnect";
import bcrypt from "bcrypt";

export const registerUser = async (payload) => {
  const userCollection = await dbConnect(collectionNameObj.userCollection);

  const { name, email, password } = payload;
  if (!name || !email || !password) {
    return { success: false, message: "Invalid input" };
  }

  const existingUser = await userCollection.findOne({ email });
  if (existingUser) {
    return { success: false, message: "User already exists" };
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const userData = {
    ...payload,
    password: hashedPassword,
    createdAt: new Date(),
  };

  const result = await userCollection.insertOne(userData);

  if (result.acknowledged) {
    return { success: true, message: "User registered successfully!" };
  } else {
    return {
      success: false,
      message: "Registration failed. Please try again.",
    };
  }
};
