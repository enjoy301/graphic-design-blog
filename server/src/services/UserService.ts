import { Inject, Service } from "typedi";
import { LoginDTO } from "../dtos/UserDTO";
import { UserRepository } from "../repositories/UserRepository";

@Service()
export class UserService {
  @Inject()
  private userRepository: UserRepository;

  public async login(user: LoginDTO) {
    const userCompare = await this.userRepository.getUser(user);

    if (!userCompare) {
      throw new Error("Id or Password is incorrect");
    }

    if (userCompare.password !== user.password) {
      throw new Error("Id or Password is incorrect");
    }

    return user;
  }

  public async register(user: LoginDTO) {
    const userCompare = await this.userRepository.getUser(user);

    if (userCompare) {
      throw new Error("User already exists");
    }

    await this.userRepository.createUser(user);

    return user;
  }
}
