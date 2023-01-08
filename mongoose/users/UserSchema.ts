/**
 * @file Define mongoose schema in collection
 */
import mongoose from "mongoose";
import User from "../../models/users/User";
const UserSchema = new mongoose.Schema<User>({
    username: { type: String, required: true, default: `testusername${Date.now()}` },
    googleID: String
}, { collection: "users" });

export default UserSchema;