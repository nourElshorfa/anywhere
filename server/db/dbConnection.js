import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const db = mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.log("❌ DB Connection Failed:", err));
