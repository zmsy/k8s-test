import express from "express";
import client from "./redis";

class App {
  public express: express.Express;

  constructor() {
    this.express = express();
    this.express.use('/', this.getRouter());
  }

  private getRouter(): express.Router {
    const router = express.Router();
    router.get('/', (req, res) => {
      res.send("Hello world!");
    });
    router.get('/visits', (req, res) => {
      client.get("visits", (err, visits) => {
        let visitsInt: number = parseInt(visits);
        if (err) {
          res.send("Error occurred! Could not get visit count.");
        }
        res.send("Number of visits: " + visitsInt);
        client.set('visits', (visitsInt + 1).toString());
      })
    })
    return router;
  }
}

export default new App().express;
