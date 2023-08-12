import express, { Request, Response, NextFunction } from "express";
import { getAllTeams } from "./handlers/getAllTeams";
import { addNewTeam } from "./handlers/addNewTeam";

const teamsRouter = express.Router();

teamsRouter.get("/", getTeams);

async function getTeams(req: Request, res: Response, next: NextFunction) {
  try {
    const results = await getAllTeams();
    res.json(results);
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
