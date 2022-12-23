import { IsNotEmpty } from "class-validator";
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({ name: "post" })
export class Post {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @IsNotEmpty()
  @Column()
  title: string;

  @IsNotEmpty()
  @Column({ type: "text" })
  content: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;
}
