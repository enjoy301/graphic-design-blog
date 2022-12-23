import { IsNotEmpty } from "class-validator";

export class CreatePostDTO {
  @IsNotEmpty()
  public title: string;

  @IsNotEmpty()
  public content: string;
}
