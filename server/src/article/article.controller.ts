import { Controller, Get } from '@nestjs/common';

@Controller('api/article')
export class ArticleController {
  constructor() {}

  @Get()
  findAll() {
    return [];
  }
}
