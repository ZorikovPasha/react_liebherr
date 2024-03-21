import {
  MiddlewareConsumer,
  Module,
  NestModule,
  Injectable,
  NestMiddleware,
  Logger,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

import { ConstructionModule } from './construction/construction.module';
import { OrderModule } from './order/order.module';
import { RequestModule } from './request/request.module';
import { PrismaModule } from './prisma/prisma.module';
import { MachineryModule } from './machinery/machinery.module';
import { AppController } from './app.controller';
import { ImageModule } from './image/image.module';
import { ArticleModule } from './article/article.module';

@Injectable()
class AppLoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');

  use(request: Request, response: Response, next: NextFunction): void {
    const startAt = process.hrtime();

    const { ip, method, originalUrl } = request;
    response.on('finish', () => {
      const diff = process.hrtime(startAt);
      const responseTime = Math.round(diff[0] * 1e3 + diff[1] * 1e-6);

      this.logger.log(
        `[${method}] ${originalUrl} ip:${ip}: ${response.statusCode} totalTime:${responseTime}ms`,
      );
    });

    next();
  }
}

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
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(AppLoggerMiddleware).forRoutes('*');
  }
}
