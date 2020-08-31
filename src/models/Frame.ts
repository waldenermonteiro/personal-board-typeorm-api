import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany
} from 'typeorm'
import Task from './Task'

@Entity('frames')
export default class Frame {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  collocation: number;

  @OneToMany((type) => Task, (task) => task.frame, { eager: true })
  tasks: Task[];
}
