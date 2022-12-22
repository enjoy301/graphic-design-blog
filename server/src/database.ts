import { DataSource } from "typeorm";
import { env } from "./env";

export const MysqlDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "test",
  password: "test",
  database: "test",
  entities: [
    // ....
  ],
});
