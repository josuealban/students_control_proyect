import { Injectable } from '@nestjs/common';

import { UpdateEstudianteDto } from './dto/update-estudiante.dto';

import { PrismaService } from 'src/prisma/prsima.service'

@Injectable()
export class studentsService{
  constructor(private readonly prismaService: PrismaService){}
  Createestudiantes(data :any) {
    return this.prismaService.estudiante.create(data)
  
  }
  Showstudents(){return this.prismaService.estudiante.findMany()}
}
