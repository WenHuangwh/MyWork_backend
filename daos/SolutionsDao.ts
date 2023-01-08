import SolutionsDaoI from "../interfaces/SolutionsDaoI";
import SolutionModel from "../mongoose/solutions/SolutionModel";
import Solutions from "../models/solutions/solutions";

export default class SolutionsDao implements SolutionsDaoI {
    private static solutionsDao: SolutionsDao | null = null;

    public static getInstance = (): any => {
        if (SolutionsDao.solutionsDao === null) {
            SolutionsDao.solutionsDao = new SolutionsDao();
        }
        return SolutionsDao.solutionsDao;
    }

    private constructor() { }

    createSolution = async (solutions: Solutions): Promise<Solutions> =>
        SolutionModel.create({ ...solutions });

    updateSolution = async (sid: String, solutions: Solutions): Promise<any> =>
        SolutionModel.updateOne(
            { _id: sid },
            { $set: solutions }
        )

    getSolutionsByLid = async (lid: String): Promise<Solutions[]> =>
        SolutionModel.find({ leetcode_id: lid }).exec();

    getAllSolutions = async (): Promise<Solutions[]> =>
        SolutionModel.find().exec();
}