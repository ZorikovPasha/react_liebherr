import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  BadRequestException,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { ConstructionService } from './construction.service';
import { CreateConstructionDto } from './dto/create-construction.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImageService } from 'src/image.service';
import { PrismaClient } from '@prisma/client';

@Controller('construction')
export class ConstructionController {
  constructor(
    private readonly constructionService: ConstructionService,
    private readonly imageService: ImageService,
    private readonly prismaClient: PrismaClient,
  ) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  @UseInterceptors(FileInterceptor('preview'))
  async create(
    @Body() dto: CreateConstructionDto,
    @UploadedFile() preview: Express.Multer.File,
  ) {
    const { title, text } = dto;
    if (typeof title !== 'string') {
      return new BadRequestException({
        errors: [
          {
            field: 'title',
            message: 'Field `title` was not provided or incorrect',
          },
        ],
      });
    }
    if (typeof text !== 'string') {
      return new BadRequestException({
        errors: [
          {
            field: 'text',
            message: 'Field `text` was not provided or incorrect',
          },
        ],
      });
    }

    console.log('preview', preview);

    if (!preview) {
      return new BadRequestException({
        errors: [
          {
            field: 'preview',
            message: 'Field `preview` was not provided',
          },
        ],
      });
    }

    const savedPreview = await this.prismaClient.image.create({
      data: await this.imageService.prepareForInsert(preview),
    });

    const data = {
      title,
      text,
      previewId: savedPreview.id,
    };

    return this.constructionService.create(data);
  }

  @Get()
  findAll() {
    return this.constructionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.constructionService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.constructionService.remove(+id);
  }
}
