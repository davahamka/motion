import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Agency } from './Agency';
import { MessageProperty } from '../utils/enum';

@Entity()
export class MessageIn {
  @PrimaryGeneratedColumn('uuid')
  message_id: string;

  @Column()
  message_date: Date;

  @Column({ nullable: true })
  date_accepted: Date;

  @Column()
  subject: string;

  @Column({
    type: 'enum',
    enum: MessageProperty,
    default: MessageProperty.NORMAL,
  })
  property: MessageProperty;

  @Column()
  attachment: string;

  @ManyToOne(() => Agency, (agency) => agency.agency_id)
  agency_id: string;
}
