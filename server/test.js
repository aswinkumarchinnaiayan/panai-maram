import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

console.log("URI Loaded:", process.env.MONGO_URI ? "YES" : "NO");

try {
  const conn = await mongoose.connect(process.env.MONGO_URI);
  console.log("✅ MongoDB Connected");
  console.log(conn.connection.host);
  process.exit(0);
} catch (err) {
  console.error("❌ Connection Error:");
  console.error(err);
  process.exit(1);
}