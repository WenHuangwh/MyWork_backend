import User from "../models/users/User";
/**
 * @file Declares API for User related data access object methods
 */
export default interface UserDaoI {
    login(googleID: String): any
};