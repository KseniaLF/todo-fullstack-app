import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';

@Entity()
export class Todo extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  description: string;

  @Column()
  title: string;

  @Column({ default: false })
  complete: boolean;

  @Column({ default: true })
  private: boolean;

  @ManyToOne(() => User, (user) => user.todos)
  user: User;
}
