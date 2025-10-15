import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prsima.service';

@Injectable()
export class StudentsService {
  constructor(private readonly prismaService: PrismaService) {}

  async Createestudiantes(data: any) {
    return this.prismaService.estudiante.create({
      data,
    });
  }

  async Showstudents() {
    return this.prismaService.estudiante.findMany();
  }
}
