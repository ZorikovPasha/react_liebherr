import {
  Controller,
  Post,
  Body,
  BadRequestException,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { RequestService } from './request.service';
import { CreateRequestDto } from './dto/create-request.dto';

@Controller('request')
export class RequestController {
  constructor(private readonly requestService: RequestService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  create(@Body() createRequestDto: CreateRequestDto) {
    const { name, email, phone, question } = createRequestDto;
    if (typeof name !== 'string') {
      return new BadRequestException({
        errors: [
          {
            field: 'name',
            message: 'Field `name` was not provided or incorrect',
          },
        ],
      });
    }
    if (typeof email !== 'string') {
      return new BadRequestException({
        errors: [
          {
            field: 'email',
            message: 'Field `email` was not provided or incorrect',
          },
        ],
      });
    }
    if (typeof phone !== 'string') {
      return new BadRequestException({
        errors: [
          {
            field: 'phone',
            message: 'Field `phone` was not provided or incorrect',
          },
        ],
      });
    }
    if (typeof question !== 'string') {
      return new BadRequestException({
        errors: [
          {
            field: 'question',
            message: 'Field `question` was not provided or incorrect',
          },
        ],
      });
    }

    const data = {
      name,
      email,
      phone,
      body: question,
    };
    return this.requestService.create(data);
  }
}
