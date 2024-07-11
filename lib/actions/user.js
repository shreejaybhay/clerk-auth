import User from "../models/users";
import { connectDb } from "../Database/db";

export const createOrUpdateUser = async (id, first_name, last_name, username, email_addresses, image_url) => {
    try {
        await connectDb();
        const user = await User.findOneAndUpdate(
            { clerkId: id },
            {
                $set: {
                    firstName: first_name,
                    lastName: last_name,
                    username: username,
                    email: email_addresses[0].email_address,
                    profilephoto: image_url,
                }
            },
            {
                upsert: true,
                new: true,
            }
        )

        await user.save();
        return user;

    } catch (error) {
        console.error(error);
        throw new Error("Failed to create or update user");
    }
}

export const deleteUser = async (id) => {
    try {
        await connectDb();
        await User.findOneAndDelete({ clerkId: id })
    } catch (error) {
        console.error(error);
        throw new Error("Failed to delete user");
    }
}