import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AttendanceController } from './attendance/attendance.controller';
import { AttendanceService } from './attendance/attendance.service';

@Module({
  imports: [],
  controllers: [AppController, AttendanceController],
  providers: [AppService, AttendanceService],
})
export class AppModule {}
