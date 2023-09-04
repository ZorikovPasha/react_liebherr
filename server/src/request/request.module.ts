import { Module } from '@nestjs/common';
import { RequestService } from './request.service';
import { RequestController } from './request.controller';

@Module({
  controllers: [RequestController],
  providers: [RequestService],
})
export class RequestModule {}
