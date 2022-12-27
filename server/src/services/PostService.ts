import { Inject, Service } from "typedi";
import { PostRepository } from "../repositories/PostRepository";
import { CreatePostDTO } from "../dtos/PostDTO";
import { Post } from "../entities/Post";
import { DeleteResult, UpdateResult } from "typeorm";

@Service()
export class PostService {
  @Inject()
  private postRepository: PostRepository;

  public async getPosts(): Promise<Post[]> {
    const posts = await this.postRepository.getPosts();
    return posts;
  }

  public async getPost(uuid: string): Promise<Post | null> {
    const post = await this.postRepository.getPost(uuid);

    return post;
  }

  public async createPost(postDTO: CreatePostDTO): Promise<UpdateResult> {
    if (postDTO.thumbnail === undefined) {
      postDTO.thumbnail =
        "https://img.freepik.com/premium-vector/summer-seascape-beach-and-ocean-illustration_71599-2676.jpg";
    }

    return await this.postRepository.createPost(postDTO);
  }

  public async updatePost(
    uuid: string,
    postDTO: CreatePostDTO
  ): Promise<UpdateResult> {
    return await this.postRepository.updatePost(uuid, postDTO);
  }

  public async deletePost(uuid: string): Promise<DeleteResult> {
    return await this.postRepository.deletePost(uuid);
  }
}
