import { Request, Response } from "express";
import SolutionsControllerI from "../interfaces/SolutionsControllerI";
import SolutionsDao from "../daos/SolutionsDao";
import Solutions from "../models/solutions/Solutions";
import LeetcodesDao from "../daos/LeetcodesDao";

export default class SolutionsController implements SolutionsControllerI {

    private static solutionsDao: SolutionsDao = SolutionsDao.getInstance();
    private static leetcodesDao: LeetcodesDao = LeetcodesDao.getInstance();
    private static solutionsController: SolutionsController | null = null;

    public static getInstance = (app: any): any => {
        if (this.solutionsController === null) {
            SolutionsController.solutionsController = new SolutionsController();
            app.get("/api/solutions", SolutionsController.solutionsController.findAllSolutions);
            app.get("/api/leetcodes/:lid/solution", SolutionsController.solutionsController.findSolutionByLid);
            app.post("/api/solutions/new", SolutionsController.solutionsController.createSolution);
            app.put("/api/solutions/:sid", SolutionsController.solutionsController.updateSolution);
        }
        return SolutionsController.solutionsController;
    }

    private constructor() { }

    findAllSolutions = (req: Request, res: Response) =>
        SolutionsController.solutionsDao.getAllSolutions()
            .then((solutions: Solutions[]) => res.json(solutions))

    findSolutionByLid = (req: Request, res: Response) => {
        SolutionsController.solutionsDao.getSolutionsByLid(req.params.lid)
            .then((solutions: Solutions[]) => res.json(solutions));
    }

    createSolution = (req: Request, res: Response) => {
        // const userId = req.body.uid;
        // const importance = req.body.ratingImportance || 2.5;
        // const repeat = req.body.ratingRepeat || 2.5;
        // SolutionsController.leetcodesDao.getLeetcodesByID(req.body.leetcode_id)
        //     .then(leetcode => {
        //         leetcode.importance = ({ ...leetcode.importance, userID: importance });
        //         leetcode.repeat = ({ ...leetcode.repeat, userID: repeat });
        //         SolutionsController.leetcodesDao.updateLeetcode(leetcode._id, leetcode);
        //     });
        SolutionsController.solutionsDao.createSolution(req.body)
            .then((solution: Solutions) => res.json(solution));

    }

    updateSolution = (req: Request, res: Response) => {
        // const userId = req.body.uid;
        // const importance = req.body.ratingImportance || 2.5;
        // const repeat = req.body.ratingRepeat || 2.5;
        // SolutionsController.leetcodesDao.getLeetcodesByID(req.body.leetcode_id)
        //     .then(leetcode => {
        //         leetcode.importance = ({ ...leetcode.importance, userID: importance });
        //         leetcode.repeat = ({ ...leetcode.repeat, userID: repeat });
        //         SolutionsController.leetcodesDao.updateLeetcode(leetcode._id, leetcode);
        //     });
        SolutionsController.solutionsDao.updateSolution(req.params.sid, req.body)
            .then((solution: Solutions) => res.json(solution));
    }



}