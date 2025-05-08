import { Type } from 'class-transformer';
import { IsString, IsNotEmpty, IsDate, IsEnum } from 'class-validator';
import { AttendanceStatus } from '../enums/attendance-status.enum';

export class CreateAttendanceDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @Type(() => Date)
  @IsDate()
  @IsNotEmpty()
  timestamp: Date;

  @IsEnum(AttendanceStatus)
  @IsNotEmpty()
  status: AttendanceStatus;
}
