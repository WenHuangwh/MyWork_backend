import MyJobs from "../models/jobs/MyJobs";
import Jobs from "../models/jobs/Jobs";
/**
 * @file Declares API for Likes related data access object methods
 */
export default interface LeetcodesDaoI {
    createJob(job: Jobs): Promise<Jobs>;
    updateJob(jid: String, job: Jobs): Promise<Jobs>;
    createMyJobs(myJobs: MyJobs): Promise<MyJobs>;
    updateMyJobs(uid: String, myJobs: MyJobs): Promise<MyJobs>;
    getAllJobs(): Promise<Jobs[]>;
    getJobById(jid: String): Promise<Jobs>;
    getMyJobsById(uid: String): Promise<MyJobs>;
};