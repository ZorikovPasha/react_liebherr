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
import { ImageService } from 'src/image/image.service';

@Controller('api/construction')
export class ConstructionController {
  constructor(
    private readonly constructionService: ConstructionService,
    private readonly imageService: ImageService,
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

    const savedPreview = await this.imageService.create(preview);

    const data = {
      title,
      text,
      previewId: savedPreview.id,
    };

    return this.constructionService.create(data);
  }

  @Get()
  async findAll() {
    return {
      constructions: await this.constructionService.findAll(),
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const item = await this.constructionService.findOne(+id);
    return {
      item: item,
      similarOnes: [],
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.constructionService.remove(+id);
  }
}
