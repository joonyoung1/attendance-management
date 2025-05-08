import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { AttendanceStatus } from '../enums/attendance-status.enum';

@Entity()
export class Attendance {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  timestamp: Date;

  @Column({ type: 'text' })
  status: AttendanceStatus;
}
