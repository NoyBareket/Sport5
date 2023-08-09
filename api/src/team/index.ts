import express, { Request, Response, NextFunction } from "express";
import { getTeamByName } from "./handlers/getTeamByName";
import zod from "zod";
// import { addTeam } from "./handlers/addNewTeam";

const teamRouter = express.Router();

teamRouter.get("/", searchTeam);

const teamBody = zod.object({
  teamID: zod.number(),
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
// teamRouter.post("/new", async function (req, res, next) {
//   try {
//     teamBody.parse(req.body);
//     const { teamID, teamName, city, mainColor, secondaryColor, semel } =
//       req.body;
//     const result = await addTeam({ teamID, teamName, city, mainColor, secondaryColor, semel});
//     return res.json({ message: "Team Added!" });
//   } catch (error) {
//     const { errors } = error;
//     console.log(errors[0].path[0] + "=> " + errors[0].message);
//     res
//       .status(400)
//       .json({ error: errors[0].path[0] + "=> " + errors[0].message });
//   }
// });
export { teamRouter };
