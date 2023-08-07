import express, { Request, Response, NextFunction } from "express";
import { getTeamByName } from "./handlers/getTeamByName";

const teamRouter = express.Router();

teamRouter.get("/", getTeam);

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

export { teamRouter };
