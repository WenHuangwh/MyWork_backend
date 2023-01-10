import mongoose, { Schema } from "mongoose";
import Jobs from "../../models/jobs/Jobs";

const JobsSchema = new mongoose.Schema<Jobs>({
    company: { type: String },
    term: { type: String },
    jobType: { type: String },
    link: { type: String },
    recommendation: { type: Number },
    date: { type: Date, default: new Date() },
    author: { type: String },
    comment: { type: String }
}, { collection: "jobs" });
export default JobsSchema;