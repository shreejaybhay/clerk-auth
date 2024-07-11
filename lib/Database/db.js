import mongoose from "mongoose";

let isConnected = false;
export const connectDb = async () => {
    mongoose.set('strictQuery', true)
    if (isConnected) {
        console.log("Connect to Mongoose is already connected");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        isConnected = true;
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
    }
}