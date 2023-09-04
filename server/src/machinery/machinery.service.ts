import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

interface CreateMachineryData {
  data: {
    name: string;
    liftingCapacity: string;
    arrowLength: string;
    mainArrowLength: string;
    maxHeight: string;
    maxRadius: string;
    speed: string;
    extension: string;
    price: string;
    imageId: number;
  };
}

@Injectable()
export class MachineryService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateMachineryData) {
    return await this.prisma.machinery.create(dto);
  }

  async findAll() {
    return await this.prisma.machinery.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.machinery.findFirst({
      where: { id },
    });
  }

  async remove(id: number) {
    return await this.prisma.machinery.delete({
      where: { id },
    });
  }
}
