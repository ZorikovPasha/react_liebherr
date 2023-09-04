import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MachineryController } from './machinery/machinery.controller';
import { ConstructionModule } from './construction/construction.module';
import { OrderModule } from './order/order.module';
import { RequestModule } from './request/request.module';

@Module({
  imports: [ConstructionModule, OrderModule, RequestModule],
  controllers: [AppController, MachineryController],
  providers: [AppService],
})
export class AppModule {}
