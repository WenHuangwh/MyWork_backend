import mongoose, { Schema } from "mongoose";
import MyJobs from "../../models/jobs/MyJobs";

const MyJobsSchema = new mongoose.Schema<MyJobs>({
    uid: { type: String },
    list: []
}, { collection: "myJobs" });
export default MyJobsSchema;