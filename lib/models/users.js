import { Email } from "@clerk/backend/dist/api";
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    clerkId: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    profilephoto: {
        type: String,
        required: true,
    }
})

const User = mongoose.models.User || mongoose.model("User", UserSchema)
export default User;