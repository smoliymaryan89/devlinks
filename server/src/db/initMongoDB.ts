import mongoose from "mongoose";
import env from "../utils/env";

const initMongoDB = async () => {
  const port = env("MONGODB_PORT");
  const host = env("MONGODB_HOST");
  const db = env("MONGODB_DB");

  try {
    await mongoose.connect(`mongodb://${host}:${port}/${db}`);
    console.log("MongoDB connected.");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};

export default initMongoDB;
