import { Injectable } from '@nestjs/common';

import { UpdateCarreraDto } from './dto/update-carrera.dto';

import { PrismaService } from 'src/prisma/prsima.service'

@Injectable()
export class CareerService{
  constructor(private readonly prismaService: PrismaService){}
  Createcareer(data :any) {
    return this.prismaService.carrera.create(data)
  
  }
  Showcareer(){return this.prismaService.carrera.findMany()}
}