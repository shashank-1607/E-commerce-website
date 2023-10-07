import mongoose from "mongoose";
import colors from "colors";
const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.ATLAS);
    console.log(
      "Connected to mongoDB database",
      connect.connection.host.bgYellow.white,
      connect.connection.name.bgBlue.white
    );
  } catch (error) {
    console.log(`Errro in Mongodb ${error}`.bgRed.white);
  }
};

export default connectDB;
