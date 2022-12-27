import { IsNotEmpty, IsOptional } from "class-validator";

export class CreatePostDTO {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  subtitle: string;

  @IsOptional()
  thumbnail: string;

  @IsNotEmpty()
  content: string;
}
