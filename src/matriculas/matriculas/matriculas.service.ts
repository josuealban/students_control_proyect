import { Injectable } from '@nestjs/common';

import { UpdateMatriculaDto } from './dto/update-matricula.dto';

import { PrismaService } from 'src/prisma/prsima.service'

@Injectable()
export class MatriculaService{
  constructor(private readonly prismaService: PrismaService){}
  createMatricula(data :any) {
    return this.prismaService.subject.create(data)
  
  }
  showMatricula(){return this.prismaService.subject.findMany()}
}


