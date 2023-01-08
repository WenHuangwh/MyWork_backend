import { Request, Response } from "express";
/**
 * @file Declares API for Users related methods
 */
export default interface UserControllerI {
    login(req: Request, res: Response): void;
};