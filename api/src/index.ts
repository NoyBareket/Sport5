import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { teamsRouter } from "./teams";
import { gamesRouter } from "./games";
dotenv.config();
const port = 5001;
const app = express();
app.use(express.json());
app.use(cors());
app.get("/health-check", function (req, res, next) {
  res.send(`API PORT ${port} IS OK ${new Date().toISOString()}`);
});

app.use("/teams", teamsRouter);
app.use("/games", gamesRouter);

app.listen(port, () => {
  console.log({ message: `Api is running on Port ${port}` });
});
