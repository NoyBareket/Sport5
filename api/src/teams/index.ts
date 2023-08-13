import express, { Request, Response, NextFunction } from "express";
import { getAllTeams } from "./handlers/getAllTeams";
import { addNewTeam } from "./handlers/addNewTeam";
import { getTeamByName } from "./handlers/getTeamByName";

const teamsRouter = express.Router();

teamsRouter.get("/", getTeams);
teamsRouter.get("/search", search);

async function getTeams(req: Request, res: Response, next: NextFunction) {
  try {
    const results = await getAllTeams();
    res.json(results);
  } catch (error) {
    return next(error);
  }
}
async function search(req: Request, res: Response, next: NextFunction) {
  try {
    const text = req.query.q;
    if (!text) throw new Error("Mising search input");
    const result = await getTeamByName(text as string);
    res.json(result);
  } catch (error) {
    return next(error);
  }
}
teamsRouter.post("/new", async function (req, res, next) {
  try {
    console.log(req.body);

    const result = await addNewTeam(req.body);
    return res.json(result);
  } catch (error) {
    console.log(error);
    return next(error);
  }
});

export { teamsRouter };
