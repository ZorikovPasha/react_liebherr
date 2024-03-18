import { Module } from '@nestjs/common';
import { ConstructionModule } from './construction/construction.module';
import { OrderModule } from './order/order.module';
import { RequestModule } from './request/request.module';
import { PrismaModule } from './prisma/prisma.module';
import { MachineryModule } from './machinery/machinery.module';
import { AppController } from './app.controller';
import { ImageModule } from './image/image.module';
import { ArticleModule } from './article/article.module';

@Module({
  imports: [
    ConstructionModule,
    OrderModule,
    RequestModule,
    PrismaModule,
    MachineryModule,
    ImageModule,
    ArticleModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
