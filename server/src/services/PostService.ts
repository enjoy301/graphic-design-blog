import { Inject, Service } from "typedi";
import { PostRepository } from "../repositories/PostRepository";

@Service()
export class PostService {
  @Inject()
  private postRepository: PostRepository;

  public async getPosts(): Promise<string> {
    console.log(`s ${await this.postRepository.getPosts()}`);
    return "haha";
  }
}
