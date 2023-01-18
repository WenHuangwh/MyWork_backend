import mongoose, { Schema } from "mongoose";
import Leetcodes from "../../models/leetcodes/Leetcodes";

const LeetcodeSchema = new mongoose.Schema<Leetcodes>({
    leetcode_id: { type: String },
    name: { type: String },
    intro: { type: String, default: "" },
    link: { type: String },
    tags: [],
    // importance: [],
    // repeat: [],
    oa: { type: Boolean, default: false },
    term: { type: String, default: "" },
    bagu: { type: Boolean, default: false },
    bq: { type: Boolean, default: false }
}, { collection: "leetcodes" });
export default LeetcodeSchema;