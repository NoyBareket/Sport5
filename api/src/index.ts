// const express = require("express")
import express, { Request, Response, NextFunction } from "express";
import { teamsRouter } from "./teams";
import { teamRouter } from "./team";
const port = 5001;
const app = express();

app.use("/teams", teamsRouter);
app.use("/team", teamRouter);

app.listen(port, () => {
  console.log({ message: `Api is running on Port ${port}` });
});
