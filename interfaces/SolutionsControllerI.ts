import { Request, Response } from "express";
import Solutions from "../models/solutions/Solutions";

export default interface SolutionsControllerI {
    findAllSolutions(req: Request, res: Response): void;
    findSolutionByLid(req: Request, res: Response): void;
    createSolution(req: Request, res: Response): void;
    updateSolution(req: Request, res: Response): void;
}