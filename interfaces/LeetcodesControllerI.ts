import { Request, Response } from "express";
import Leetcodes from "../models/leetcodes/Leetcodes";

export default interface LeetcodesControllerI {
    findAllLeetcodes(req: Request, res: Response): void;
    findLeetcodesByID(req: Request, res: Response): void;
    findLeetcodesByTag(req: Request, res: Response): void;
    createLeetcode(req: Request, res: Response): void;
    updateLeetcode(req: Request, res: Response): void;
}