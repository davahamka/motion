import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';
import { Name } from './embed/Name';

@Entity()
export class Users {
  @PrimaryGeneratedColumn('uuid')
  user_id: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column((type) => Name)
  name: Name;

  @Column()
  image_url: string;

  @CreateDateColumn()
  created_at: Date;

  @Column({ nullable: true })
  last_login: string;
}
