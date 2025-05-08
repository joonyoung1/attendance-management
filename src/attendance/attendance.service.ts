import { Injectable } from '@nestjs/common';
import { CreateAttendanceDto } from './dto/create-attendance.dto';

@Injectable()
export class AttendanceService {
  getAttendance(name: string): string {
    return `${name} Attendance information`;
  }

  createAttendance(createAttendanceDto: CreateAttendanceDto): string {
    return `Attendance created for ${createAttendanceDto.name}`;
  }
}
