import { Service } from "typedi";
import { Repository } from "typeorm";
import { MysqlDataSource } from "../database";
import { LoginDTO } from "../dtos/UserDTO";
import { User } from "../entities/User";

@Service()
export class UserRepository extends Repository<User> {
  public async getUser(user: LoginDTO) {
    return MysqlDataSource.createQueryBuilder(User, "user")
      .select(["user.id", "user.password"])
      .where("user.id = :id", { id: user.id })
      .getOne();
  }

  public async createUser(user: LoginDTO) {
    return MysqlDataSource.createQueryBuilder(User, "user")
      .insert()
      .into(User)
      .values({
        id: user.id,
        password: user.password,
      })
      .execute();
  }
}
