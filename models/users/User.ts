import mongoose from "mongoose";

export default interface User {
    _id?: mongoose.Schema.Types.ObjectId,
    username: string,
    googleID: string
};