import { Repository } from "typeorm";
import { MysqlDataSource } from "../database";
import { Post } from "../entities/Post";
import { Service } from "typedi";

@Service()
export class PostRepository extends Repository<Post> {
  public async getPosts() {
    return "hihi";
    // return MysqlDataSource.createQueryBuilder(Post, "post")
    //   .select([
    //     "post.id",
    //     "post.title",
    //     "post.content",
    //     "post.createdAt",
    //     "post.updatedAt",
    //   ])
    //   .getMany();
  }
}
