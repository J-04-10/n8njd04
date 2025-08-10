import { Module } from '@nestjs/common';
import { TypificationsController } from '../typifications.controller';
import { TypificationsService } from '../typifications.service';

@Module({
  controllers: [TypificationsController],
  providers: [TypificationsService],
})
export class TypificationsModule {}
