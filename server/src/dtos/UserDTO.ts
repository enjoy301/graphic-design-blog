import { IsNotEmpty } from "class-validator";

export class LoginDTO {
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  password: string;
}
