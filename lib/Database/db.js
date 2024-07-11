import mongoose from "mongoose";

export const connectToDB = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGODB_URL, {
            dbName: "auth"
        })
        console.log("db connected...");
    } catch (error) {
        console.log(error);
        console.log("Couldn't connect to MongoDb: " + error.message);
    }
}