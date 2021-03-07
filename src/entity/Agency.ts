import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Agency {
  @PrimaryGeneratedColumn('uuid')
  agency_id: string;

  @Column()
  agency_name: string;

  @Column()
  address: string;
}
