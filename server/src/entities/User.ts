import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { IsNotEmpty } from "class-validator";

@Entity({ name: "user" })
export class User {
  @IsNotEmpty()
  @PrimaryColumn()
  id: string;

  @IsNotEmpty()
  @Column()
  password: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;
}
