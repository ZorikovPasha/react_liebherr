import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

interface CreateRequestData {
  name: string;
  email: string;
  phone: string;
  body: string;
}

@Injectable()
export class RequestService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateRequestData) {
    return this.prisma.request.create({
      data: dto,
    });
  }
}
