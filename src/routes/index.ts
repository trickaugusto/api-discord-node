import { Express, Request, Response } from "express";
import express from "express";
import bot from "./bot-route";

const routes = (app: Express) => {
  app.route("/").get((req: Request, res: Response) => {
    res.status(200).send({ titulo: "Home" });
  });

  app.use(express.json(), bot);
};

export default routes;
