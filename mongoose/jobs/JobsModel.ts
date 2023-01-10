import mongoose from "mongoose";
import JobsSchema from "./JobsSchema";

const JobsModel = mongoose.model("Jobs", JobsSchema);
export default JobsModel;