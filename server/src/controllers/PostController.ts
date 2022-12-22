import { Response } from "express";
import {
  Body,
  Get,
  HttpCode,
  JsonController,
  Param,
  Post,
  Res,
} from "routing-controllers";
import Container from "typedi";
import { CreatePostDTO } from "../dtos/PostDTO";
import { PostService } from "../services/PostService";

@JsonController()
export class PostController {
  constructor() {}

  @HttpCode(200)
  @Get("/posts")
  public async getAll() {
    const c = await Container.get(PostService).getPosts();
    console.log(c);
    return "This action returns all posts";
  }

  @HttpCode(200)
  @Get("/posts/:id")
  getOne(@Param("id") id: number, @Res() res: Response) {
    if (id === 1) {
      return res.status(404).send({ message: "Post not found" });
    }

    return "This action returns one post";
  }

  @HttpCode(201)
  @Post("/posts")
  post(@Body() post: CreatePostDTO) {
    console.log(post.title);
    console.log(post.content);
    return "Saving post...";
  }
}