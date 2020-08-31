import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn
} from 'typeorm'
import Frame from './Frame'
@Entity('tasks')
export default class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  collocation: number;

  @ManyToOne((type) => Frame, (frame) => frame.tasks, {
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'frame_id', referencedColumnName: 'id' })
  frame: Frame;

  @Column()
  frame_id: string;
}
