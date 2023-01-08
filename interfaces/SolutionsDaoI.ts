import Solutions from "../models/solutions/solutions";

export default interface SolutionsDaoI {
    createSolution(solutions: Solutions): Promise<Solutions>;
    updateSolution(sid: String, solutions: Solutions): Promise<Solutions>;
    getSolutionsByLid(lid: String): Promise<Solutions[]>;
    getAllSolutions(): Promise<Solutions[]>;
}