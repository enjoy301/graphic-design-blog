import { Response } from "express";
import {
  Body,
  Delete,
  Get,
  HttpCode,
  JsonController,
  Param,
  Post,
  Put,
  Res,
  UploadedFile,
} from "routing-controllers";
import { Inject, Service } from "typedi";
import { CreatePostDTO } from "../dtos/PostDTO";
import { PostService } from "../services/PostService";
import { s3UploadOptions } from "../config/S3UploadOptions";

@Service()
@JsonController()
export class PostController {
  @Inject()
  private postService: PostService;

  @HttpCode(200)
  @Get("/posts")
  public async getAll() {
    const posts = await this.postService.getPosts();
    return posts;
  }

  @HttpCode(200)
  @Get("/posts/:uuid")
  async getOne(@Param("uuid") uuid: string, @Res() res: Response) {
    const post = await this.postService.getPost(uuid);

    if (!post) {
      return res.status(404).send("Post not found");
    }

    return post;
  }

  @HttpCode(201)
  @Post("/posts")
  async post(@Body() post: CreatePostDTO) {
    await this.postService.createPost(post);
    return "Saving post...";
  }

  @HttpCode(200)
  @Put("/posts/:uuid")
  async update(@Param("uuid") uuid: string, @Body() post: CreatePostDTO) {
    await this.postService.updatePost(uuid, post);
    return "Updating a post...";
  }

  @HttpCode(200)
  @Delete("/posts/:uuid")
  async delete(@Param("uuid") uuid: string) {
    await this.postService.deletePost(uuid);
    return "Removing post...";
  }

  @HttpCode(200)
  @Post("/image")
  async uploadImage(
    @UploadedFile("image", { options: s3UploadOptions })
    image: Express.Multer.File
  ) {
    return "Uploading image...";
  }
}
