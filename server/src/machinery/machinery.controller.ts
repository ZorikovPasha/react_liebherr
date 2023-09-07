import {
  Controller,
  Get,
  Param,
  Delete,
  Post,
  UsePipes,
  ValidationPipe,
  Body,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { MachineryService } from './machinery.service';
import { CreateMachineryDto } from './dto/create-machinery.dto';
import { BadRequestException } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImageService } from 'src/image/image.service';

@Controller('api/machinery')
export class MachineryController {
  constructor(
    private readonly machineryService: MachineryService,
    private readonly imageService: ImageService,
  ) {}

  @Get()
  async getAll() {
    const items = await this.machineryService.findAll();
    return {
      items: items,
      total: items.length,
    };
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  @UseInterceptors(FileInterceptor('image'))
  async createOne(
    @Body() dto: CreateMachineryDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    console.log('image', file);

    const {
      name,
      liftingCapacity,
      arrowLength,
      mainArrowLength,
      maxHeight,
      maxRadius,
      speed,
      extension,
      price,
    } = dto;

    if (typeof name !== 'string') {
      return new BadRequestException({
        errors: [
          {
            field: 'name',
            message: 'Field `name` was not provided',
          },
        ],
      });
    }
    if (typeof liftingCapacity !== 'string') {
      return new BadRequestException({
        errors: [
          {
            field: 'liftingCapacity',
            message: 'Field `liftingCapacity` was not provided',
          },
        ],
      });
    }
    if (typeof arrowLength !== 'string') {
      return new BadRequestException({
        errors: [
          {
            field: 'arrowLength',
            message: 'Field `arrowLength` was not provided',
          },
        ],
      });
    }
    if (typeof mainArrowLength !== 'string') {
      return new BadRequestException({
        errors: [
          {
            field: 'mainArrowLength',
            message: 'Field `mainArrowLength` was not provided',
          },
        ],
      });
    }
    if (typeof maxHeight !== 'string') {
      return new BadRequestException({
        errors: [
          {
            field: 'maxHeight',
            message: 'Field `maxHeight` was not provided',
          },
        ],
      });
    }
    if (typeof maxRadius !== 'string') {
      return new BadRequestException({
        errors: [
          {
            field: 'maxRadius',
            message: 'Field `maxRadius` was not provided',
          },
        ],
      });
    }
    if (typeof speed !== 'string') {
      return new BadRequestException({
        errors: [
          {
            field: 'speed',
            message: 'Field `speed` was not provided',
          },
        ],
      });
    }
    if (typeof extension !== 'string') {
      return new BadRequestException({
        errors: [
          {
            field: 'extension',
            message: 'Field `extension` was not provided',
          },
        ],
      });
    }
    if (typeof price !== 'string') {
      return new BadRequestException({
        errors: [
          {
            field: 'price',
            message: 'Field `price` was not provided',
          },
        ],
      });
    }

    const savedImage = await this.imageService.create(file);

    return this.machineryService.create({
      data: {
        name,
        liftingCapacity,
        arrowLength,
        mainArrowLength,
        maxHeight,
        maxRadius,
        speed,
        extension,
        price,
        imageId: savedImage.id,
      },
    });
  }

  @Get(':id')
  async getOne(@Param('id') id: number) {
    const item = await this.machineryService.findOne(id);
    return {
      item: item,
      similarOnes: [],
    };
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: number) {
    return this.machineryService.remove(id);
  }
}
