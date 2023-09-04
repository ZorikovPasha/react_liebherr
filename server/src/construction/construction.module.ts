import { Module } from '@nestjs/common';
import { ConstructionService } from './construction.service';
import { ConstructionController } from './construction.controller';

@Module({
  controllers: [ConstructionController],
  providers: [ConstructionService],
})
export class ConstructionModule {}
