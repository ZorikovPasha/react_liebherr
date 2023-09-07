import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

interface ICreateConstructionData {
  title: string;
  text: string;
}

@Injectable()
export class ConstructionService {
  constructor(private prisma: PrismaService) {}

  async create(data: ICreateConstructionData) {
    return await this.prisma.construction.create({
      data: data,
    });
  }

  async findAll() {
    return await this.prisma.construction.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.construction.findFirst({
      where: { id },
    });
  }

  async remove(id: number) {
    return await this.prisma.construction.delete({
      where: { id },
    });
  }
}
