import mongoose from "mongoose";
import MyJobsSchema from "./MyJobsSchema";

const MyJobsModel = mongoose.model("MyJobs", MyJobsSchema);
export default MyJobsModel;