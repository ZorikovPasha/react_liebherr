import { Module } from '@nestjs/common';
import { MachineryService } from './machinery.service';
import { MachineryController } from './machinery.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ImageModule } from 'src/image/image.module';

@Module({
  imports: [PrismaModule, ImageModule],
  controllers: [MachineryController],
  providers: [MachineryService],
})
export class MachineryModule {}
