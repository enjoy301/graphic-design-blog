import "reflect-metadata";
import express from "express";
import { useContainer, useExpressServer } from "routing-controllers";
import { routingControllerOptions } from "./utils/RoutingConfig";
import bodyParser from "body-parser";
import { MysqlDataSource } from "./database";
import Container from "typedi";

export class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.setDatabase();
    this.setMiddlewares();
  }

  private setDatabase() {
    MysqlDataSource.initialize()
      .then(() => {
        console.log("Data Source has been initialized!");
      })
      .catch((err) => {
        console.error("Error during Data Source initialization");
        console.error(err);
      });
  }

  private setMiddlewares() {
    this.app.use(bodyParser.json({ limit: "50mb" }));
    this.app.use(bodyParser.urlencoded({ limit: "50mb", extended: false }));
  }

  public async createExpressServer(port: number) {
    try {
      useContainer(Container);
      useExpressServer(this.app, routingControllerOptions);

      this.app.listen(port, () => {
        console.log(`Server listening on port: ${port}`);
      });
    } catch (error) {
      console.error(error);
    }
  }
}
