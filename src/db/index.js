import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstace = await mongoose.connect(
      `${process.env.DATABASE_URI}/${DB_NAME}`,
    );
    console.log(
      `mongodb connected !! DB Host ${connectionInstace.connection.host}`,
    );
  } catch (error) {
    console.log("MongoDb connection ERROR", error);
    process.exit(1);
  }
};

export default connectDB;
