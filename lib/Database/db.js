import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

export const connectToDB = async () => {
  if (cached.conn) {
    return cached.conn;
  }
  if (!MONGODB_URL) {
    throw new Error("MONGODB_URL is not defined");
  }
  cached.promise =
    cached.promise ||
    mongoose.connectToDB(MONGODB_URL, {
      dbName: "authentication",
      bufferCommands: false,
    });
  cached.conn = await cached.promise;
  return cached.conn;
};
