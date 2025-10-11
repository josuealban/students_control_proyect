import { Injectable } from '@nestjs/common';

import { UpdateMateriaDocenteDto } from './dto/update-materia-docente.dto';

import { PrismaService } from 'src/prisma/prsima.service'

@Injectable()
export class subjectwithdocentService{
  constructor(private readonly prismaService: PrismaService){}
  Createdocentwithsubject(data :any) {
    return this.prismaService.subjectwithdocent.create(data)
  
  }
  Showdocentwithsubject(){return this.prismaService.subjectwithdocent.findMany()}
}

