import LeetcodesDaoI from "../interfaces/LeetcodesDaoI";
import LeetcodeModel from "../mongoose/leetcodes/LeetcodeModel";
import Leetcodes from "../models/leetcodes/Leetcodes";

export default class LeetcodesDao implements LeetcodesDaoI {
    private static leetcodesDao: LeetcodesDao | null = null;

    public static getInstance = (): any => {
        if (LeetcodesDao.leetcodesDao === null) {
            LeetcodesDao.leetcodesDao = new LeetcodesDao();
        }
        return LeetcodesDao.leetcodesDao;
    }

    private constructor() { }

    createLeetcode = async (leetcodes: Leetcodes): Promise<any> =>
        LeetcodeModel.create({ ...leetcodes })

    updateLeetcode = async (tid: String, leetcodes: Leetcodes): Promise<any> =>
        LeetcodeModel.updateOne(
            { _id: tid },
            { $set: leetcodes }
        )

    getAllLeetcodes = async (): Promise<Leetcodes[]> =>
        LeetcodeModel.find()
            .exec();

    getLeetcodesByID = async (leetcode_id: String): Promise<any> =>
        LeetcodeModel.find({ leetcode_id: leetcode_id })
            .exec();

    getLeetcodesByTag = async (tag: String): Promise<Leetcodes[]> =>
        LeetcodeModel.find({ tags: { $all: tag } }).exec()
}