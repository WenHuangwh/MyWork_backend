import JobsDao from "../daos/JobsDao";
import Jobs from "../models/jobs/Jobs";
import MyJobs from "../models/jobs/MyJobs";
import { Express, Request, Response } from "express";
import JobsControllerI from "../interfaces/JobsControllerI";


export default class JobsController implements JobsControllerI {
    private static jobsDao: JobsDao = JobsDao.getInstance();
    private static jobsController: JobsController | null = null;

    public static getInstance = (app: Express): any => {
        if (this.jobsController === null) {
            JobsController.jobsController = new JobsController();
            app.post("/api/jobs", JobsController.jobsController.createJob);
            app.post("/api/jobs/users/:uid", JobsController.jobsController.createMyJobs);
            app.put("/api/jobs/users/:uid", JobsController.jobsController.updateMyJobs);
            app.get("/api/jobs", JobsController.jobsController.findAllJobs);
            app.get("/api/jobs/:jid", JobsController.jobsController.findJobById);
            app.put("/api/jobs/:jid", JobsController.jobsController.updateJob);
            app.get("/api/jobs/users/:uid", JobsController.jobsController.findMyJobsById);
        }
    }

    createJob = (req: Request, res: Response) =>
        JobsController.jobsDao.createJob(req.body)
            .then((job: Jobs) => res.json(job));

    updateJob = (req: Request, res: Response) =>
        JobsController.jobsDao.updateJob(req.params.jid, req.body)
            .then((job: Jobs) => res.json(job));

    createMyJobs = (req: Request, res: Response) => {
        JobsController.jobsDao.createMyJobs(req.body)
            .then((myJobs: MyJobs) => res.json(myJobs));
    }

    updateMyJobs = (req: Request, res: Response) => {
        JobsController.jobsDao.updateMyJobs(req.params.uid, req.body)
            .then((myJobs: MyJobs) => res.json(myJobs));
    }

    findAllJobs = (req: Request, res: Response) =>
        JobsController.jobsDao.getAllJobs()
            .then((jobs: Jobs[]) => res.json(jobs));

    findJobById = (req: Request, res: Response) =>
        JobsController.jobsDao.getJobById(req.params.jid)
            .then((job: Jobs) => res.json(job));

    findMyJobsById = (req: Request, res: Response) =>
        JobsController.jobsDao.getMyJobsById(req.params.uid)
            .then((myJobs: MyJobs) => res.json(myJobs));

}