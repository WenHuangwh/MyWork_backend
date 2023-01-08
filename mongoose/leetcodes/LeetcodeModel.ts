import mongoose from "mongoose";
import LeetcodeSchema from "./LeetcodeSchema";

const LeetcodeModel = mongoose.model("Leetcodes", LeetcodeSchema);
export default LeetcodeModel;