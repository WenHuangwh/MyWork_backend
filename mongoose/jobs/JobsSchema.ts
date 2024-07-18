import mongoose, { Schema } from "mongoose";
import Jobs from "../../models/jobs/Jobs";

const JobsSchema = new mongoose.Schema<Jobs>({
    company: { type: String },
    link: { type: String },
    comment: { type: String }
}, { collection: "jobs" });
export default JobsSchema;