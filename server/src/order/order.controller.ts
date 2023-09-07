import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  create(@Body() dto: CreateOrderDto) {
    const { name, email, phone, machineryId } = dto;
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
    if (typeof machineryId !== 'number') {
      return new BadRequestException({
        errors: [
          {
            field: 'number',
            message: 'Field `number` was not provided or incorrect',
          },
        ],
      });
    }

    const data = {
      name: 'Order',
      userName: name,
      userEmail: email,
      userPhone: phone,
      status: 'Created',
    };

    return this.orderService.create(data);
  }
}
