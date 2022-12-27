import { InsertResult, Repository } from "typeorm";
import { MysqlDataSource } from "../database";
import { Post } from "../entities/Post";
import { Service } from "typedi";
import { CreatePostDTO } from "../dtos/PostDTO";

@Service()
export class PostRepository extends Repository<Post> {
  public async getPosts(): Promise<Post[]> {
    return MysqlDataSource.createQueryBuilder(Post, "post")
      .select([
        "post.id",
        "post.title",
        "post.subtitle",
        "post.thumbnail",
        "post.updatedAt",
      ])
      .orderBy("post.updatedAt", "DESC")
      .getMany();
  }

  public async getPost(uuid: string): Promise<Post | null> {
    return MysqlDataSource.createQueryBuilder(Post, "post")
      .select(["post.id", "post.title", "post.content", "post.updatedAt"])
      .where("post.id = :uuid", { uuid })
      .getOne();
  }

  public async createPost(postDTO: CreatePostDTO): Promise<InsertResult> {
    return MysqlDataSource.createQueryBuilder(Post, "post")
      .insert()
      .into(Post)
      .values({
        title: postDTO.title,
        subtitle: postDTO.subtitle,
        thumbnail: postDTO.thumbnail,
        content: postDTO.content,
      })
      .execute();
  }

  public async updatePost(uuid: string, postDTO: CreatePostDTO) {
    return MysqlDataSource.createQueryBuilder(Post, "post")
      .update(Post)
      .set({
        title: postDTO.title,
        content: postDTO.content,
      })
      .where("id = :uuid", { uuid })
      .execute();
  }

  public async deletePost(uuid: string) {
    return MysqlDataSource.createQueryBuilder(Post, "post")
      .delete()
      .from(Post)
      .where("id = :uuid", { uuid })
      .execute();
  }
}
