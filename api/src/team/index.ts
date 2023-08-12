import express, { Request, Response, NextFunction } from "express";
import { getTeamByName } from "./handlers/getTeamByName";
import zod from "zod";
import { addNewTeam } from "./handlers/addNewTeam";
// import { addTeam } from "./handlers/addNewTeam";

const teamRouter = express.Router();

teamRouter.get("/", searchTeam);

const teamBody = zod.object({
  teamName: zod.string().max(45),
  city: zod.string().max(45),
  mainColor: zod.string().max(45),
  secondaryColor: zod.string().max(45),
  semel: zod.string().max(500),
});

async function searchTeam(req: Request, res: Response, next: NextFunction) {
  try {
    const text = req.query.q;
    if (!text) throw new Error("Missing search input");
    const result = await getTeamByName(text as string);
    res.json(result);
  } catch (error) {
    return next(error);
  }
}
teamRouter.post("/new", async function (req, res, next) {
  try {
    console.log(req.body);

    const result = await addNewTeam(req.body);
    return res.json(result);
  } catch (error) {
    console.log(error);
    return next(error);
  }
});
export { teamRouter };
