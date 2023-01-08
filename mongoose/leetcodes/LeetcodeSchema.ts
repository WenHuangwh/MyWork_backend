import mongoose, { Schema } from "mongoose";
import Leetcodes from "../../models/leetcodes/Leetcodes";

const LeetcodeSchema = new mongoose.Schema<Leetcodes>({
    leetcode_id: { type: String },
    name: { type: String },
    intro: { type: String, default: "" },
    link: { type: String },
    tags: {},
    oa: { type: Boolean, default: false },
    term: { type: String, default: "" }
}, { collection: "leetcodes" });
export default LeetcodeSchema;