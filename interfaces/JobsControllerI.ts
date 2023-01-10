import { Request, Response } from "express";

export default interface JobsControllerI {
    createJob(req: Request, res: Response): void;
    updateJob(req: Request, res: Response): void;
    createMyJobs(req: Request, res: Response): void;
    updateMyJobs(req: Request, res: Response): void;
    findAllJobs(req: Request, res: Response): void;
    findJobById(req: Request, res: Response): void;
    findMyJobsById(req: Request, res: Response): void;
}