import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

interface ICreateOrderData {
  name: string;
  userName: string;
  userEmail: string;
  userPhone: string;
  status: string;
}

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  create(data: ICreateOrderData) {
    return this.prisma.order.create({
      data: data,
    });
  }
}
