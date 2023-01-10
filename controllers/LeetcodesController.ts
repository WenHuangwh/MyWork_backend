import LeetcodesDao from "../daos/LeetcodesDao";
import Leetcodes from "../models/leetcodes/Leetcodes";
import { Express, Request, Response } from "express";
import LeetcodesControllerI from "../interfaces/LeetcodesControllerI";

export default class LeetcodesController implements LeetcodesControllerI {
    private static leetcodesDao: LeetcodesDao = LeetcodesDao.getInstance();
    private static leetcodesController: LeetcodesController | null = null;

    public static getInstance = (app: Express): any => {
        if (this.leetcodesController === null) {
            LeetcodesController.leetcodesController = new LeetcodesController();
            app.get("/api/leetcodes", LeetcodesController.leetcodesController.findAllLeetcodes);
            app.get("/api/leetcodes/:lid", LeetcodesController.leetcodesController.findLeetcodesByID);
            app.get("/api/leetcodes/tags", LeetcodesController.leetcodesController.findLeetcodesByTag);
            app.post("/api/leetcodes/new", LeetcodesController.leetcodesController.createLeetcode);
            app.put("/api/leetcodes/mongodbid/:mid", LeetcodesController.leetcodesController.updateLeetcode);
        }
        return LeetcodesController.leetcodesController;
    }

    private constructor() { }

    findAllLeetcodes = (req: Request, res: Response) =>
        LeetcodesController.leetcodesDao.getAllLeetcodes()
            .then((leetcodes: Leetcodes[]) => res.json(leetcodes));

    findLeetcodesByID = (req: Request, res: Response) =>
        LeetcodesController.leetcodesDao.getLeetcodesByID(req.params.lid)
            .then((leetcode: Leetcodes) => res.json(leetcode));

    findLeetcodesByTag = (req: Request, res: Response) =>
        LeetcodesController.leetcodesDao.getLeetcodesByTag(req.body.tag)
            .then((leetcodes: Leetcodes[]) => res.json(leetcodes));

    createLeetcode = async (req: Request, res: Response) => {
        // req.body.importance = {};
        // req.body.repeat = {};
        LeetcodesController.leetcodesDao.createLeetcode(req.body)
            .then((leetcode: Leetcodes) => res.json(leetcode));
    }

    updateLeetcode = async (req: Request, res: Response) =>
        LeetcodesController.leetcodesDao.updateLeetcode(req.params.mid, req.body)
            .then((leetcode: Leetcodes) => res.json(leetcode));

}