import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AttendanceService } from './attendance.service';
import { CreateAttendanceDto } from './dto/create-attendance.dto';

@Controller('attendance')
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) {}

  @Get(':name')
  getAttendance(@Param('name') name: string) {
    return this.attendanceService.getAttendance(name);
  }

  @Post()
  createAttendance(@Body() createAttendanceDto: CreateAttendanceDto) {
    return this.attendanceService.createAttendance(createAttendanceDto);
  }
}
