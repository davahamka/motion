import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { MessageProperty } from '../utils/enum';
import { Agency } from './Agency';
import { MessageIn } from './MessageIn';

@Entity()
export class MessageOut {
  @PrimaryGeneratedColumn('uuid')
  message_id: string;

  @Column()
  message_date: Date;

  @Column()
  subject: string;

  @Column({
    type: 'enum',
    enum: MessageProperty,
    default: MessageProperty.NORMAL,
  })
  property: MessageProperty;

  @ManyToOne(() => Agency, (agency) => agency.agency_id)
  agency_id: string;

  @OneToOne(() => MessageIn)
  @JoinColumn()
  message_in: MessageIn;
}
