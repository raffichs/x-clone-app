import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://raffi4244:aMAjq0iOQMtlGD3v@cluster0.nk7h2qp.mongodb.net/x-db?retryWrites=true&w=majority&appName=Cluster0");
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connection to mongoDB: ${error.message}`);
    process.exit(1);
  }
};

export default connectMongoDB;
