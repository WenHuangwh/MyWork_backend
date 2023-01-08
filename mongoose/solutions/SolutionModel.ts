import mongoose from "mongoose";
import SolutionSchema from "./SolutionSchema";
const SolutionModel = mongoose.model("Solutions", SolutionSchema);
export default SolutionModel;