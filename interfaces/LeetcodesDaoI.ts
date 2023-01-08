import Leetcodes from "../models/leetcodes/Leetcodes";

/**
 * @file Declares API for Likes related data access object methods
 */
export default interface LeetcodesDaoI {
    createLeetcode(leetcodes: Leetcodes): Promise<Leetcodes>;
    updateLeetcode(tid: String, leetcodes: Leetcodes): Promise<Leetcodes>;
    getAllLeetcodes(): Promise<Leetcodes[]>;
    getLeetcodesByID(leetcode_id: String): Promise<Leetcodes>;
    getLeetcodesByTag(tag: String): Promise<Leetcodes[]>;
};