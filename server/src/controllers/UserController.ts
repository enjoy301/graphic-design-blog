import { Response } from "express";
import { Body, HttpCode, JsonController, Post, Res } from "routing-controllers";
import { Inject, Service } from "typedi";
import { LoginDTO } from "../dtos/UserDTO";
import { UserService } from "../services/UserService";

@Service()
@JsonController()
export class UserController {
  @Inject()
  private userService: UserService;

  @HttpCode(200)
  @Post("/login")
  public async login(@Body() user: LoginDTO, @Res() res: Response) {
    try {
      let userDB = await this.userService.login(user);

      return userDB;
    } catch (error: any) {
      if (error.message === "Id or Password is incorrect") {
        return res.status(401).send({ message: error.message });
      } else {
        return res.status(500).send({ message: error.message });
      }
    }
  }

  @HttpCode(200)
  @Post("/register")
  public async register(@Body() user: LoginDTO, @Res() res: Response) {
    try {
      let userDB = await this.userService.register(user);

      return userDB;
    } catch (error: any) {
      if (error.message === "User already exists") {
        return res.status(409).send(error.message);
      } else {
        return res.status(500).send(error.message);
      }
    }
  }
}
