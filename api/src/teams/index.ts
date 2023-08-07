import express, { Request, Response, NextFunction } from "express";
import { logger } from "logger";
import { getAllTeams } from "./handlers/getAllTeams";

const teamsRouter = express.Router();

teamsRouter.get("/", getTeams);

// no input
async function getTeams(req: Request, res: Response, next: NextFunction) {
  try {
    const results = await getAllTeams();
    res.json(results);
  } catch (error) {
    logger.error(error.message);
    return next(error);
  }
}

export { teamsRouter };
