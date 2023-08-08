import express, { Request, Response, NextFunction } from "express";
import { getTeamByName } from "./handlers/getTeamByName";

const teamRouter = express.Router();

teamRouter.get("/", searchTeam);

// input - name: string, required,
async function searchTeam(req: Request, res: Response, next: NextFunction) {
  try {
    const text = req.query.q;
    if (!text) throw new Error("Mising search input");
    const result = await getTeamByName(text as string);
    res.json(result);
  } catch (error) {
    return next(error);
  }
}
export { teamRouter };
