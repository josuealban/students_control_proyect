import { Injectable } from '@nestjs/common';

import { UpdateCicloDto}from './dto/update-ciclo.dto'

import { PrismaService } from 'src/prisma/prsima.service'

@Injectable()
export class cycleservice{
  constructor(private readonly prismaService: PrismaService){}
  Createcycles(data :any) {
    return this.prismaService.docente.create(data)
  
  }
  Showcycles(){return this.prismaService.docente.findMany()}
}