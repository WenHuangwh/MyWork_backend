import mongoose, { Schema } from "mongoose";
import Solutions from "../../models/solutions/solutions";

const SolutionSchema = new mongoose.Schema<Solutions>({
    uid: String,
    username: String,
    leetcode_id: String,
    shortAnswer: String,
    longAnswer: { type: String, default: "" },
    code: { type: String, default: "" },
    ratingImportance: { type: Number, default: 2.5 },
    ratingRepeat: { type: Number, default: 2.5 }
}, { collection: "solutions" });

export default SolutionSchema;