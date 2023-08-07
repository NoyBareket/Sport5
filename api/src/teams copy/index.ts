import express, { Request, Response, NextFunction } from "express";
import { getAllTeams } from "./handlers/getAllTeams";
import { getTeamByName } from "./handlers/getTeamByName";

const teamsRouter = express.Router();

teamsRouter.get("/", getTeams);
teamsRouter.get("/:name", getTeam);

async function getTeams(req: Request, res: Response, next: NextFunction) {
  try {
    const results = await getAllTeams();
    res.json(results);
  } catch (error) {
    return next(error);
  }
}

async function getTeam(req: Request, res: Response, next: NextFunction) {
  try {
    const teamName = req.params.id;
    const teamNameString = String(teamName);
    if (!teamNameString) throw new Error("Id is not a valid Name");
    const result = await getTeamByName(teamNameString);
    res.json(result);
  } catch (error) {
    return next(error);
  }
}

export { teamsRouter };
