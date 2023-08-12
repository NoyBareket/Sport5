import express, { Request, Response, NextFunction } from "express";
import { getAllGames } from "./handlers/getAllGames";
import { addNewGame } from "./handlers/addNewGame";

const gamesRouter = express.Router();

gamesRouter.get("/", getGames);

async function getGames(req: Request, res: Response, next: NextFunction) {
  try {
    const results = await getAllGames();
    res.json(results);
  } catch (error) {
    return next(error);
  }
}

gamesRouter.post("/new", async function (req, res, next) {
  try {
    console.log(req.body);

    const result = await addNewGame(req.body);
    return res.json(result);
  } catch (error) {
    console.log(error);
    return next(error);
  }
});

export { gamesRouter };
