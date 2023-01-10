import JobsDaoI from "../interfaces/JobsDaoI";
import Jobs from "../models/jobs/Jobs";
import MyJobs from "../models/jobs/MyJobs";
import JobsModel from "../mongoose/jobs/JobsModel";
import MyJobsModel from "../mongoose/myJobs/MyJobsModel";

export default class JobsDao implements JobsDaoI {
    private static jobsDao: JobsDao | null = null;

    public static getInstance = (): any => {
        if (JobsDao.jobsDao === null) {
            JobsDao.jobsDao = new JobsDao();
        }
        return JobsDao.jobsDao;
    }

    private constructor() { }

    createJob = async (job: Jobs): Promise<Jobs> =>
        JobsModel.create({ ...job });

    updateJob = async (jid: String, job: Jobs): Promise<any> =>
        JobsModel.updateOne(
            { _id: jid },
            { $set: job }
        )

    createMyJobs = async (myJobs: MyJobs): Promise<MyJobs> =>
        MyJobsModel.create({ ...myJobs });

    updateMyJobs = async (uid: String, myJobs: MyJobs): Promise<any> =>
        MyJobsModel.updateOne(
            { uid: uid },
            { $set: myJobs }
        )

    getAllJobs = async (): Promise<Jobs[]> =>
        JobsModel.find()
            .exec();

    getJobById = async (jid: String): Promise<any> =>
        JobsModel.find({ _id: jid })
            .exec();

    getMyJobsById = async (uid: String): Promise<any> =>
        MyJobsModel.find({ uid: uid })
            .exec();

}