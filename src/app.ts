import express from "express";

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
    return router;
  }
}

export default new App().express;
