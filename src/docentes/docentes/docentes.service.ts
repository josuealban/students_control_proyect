import { Injectable } from '@nestjs/common';

import { UpdateDocenteDto } from './dto/update-docente.dto';

import { PrismaService } from 'src/prisma/prsima.service';

@Injectable()
export class DocentService {
  constructor(private readonly prismaService: PrismaService){}
  CreateDocentes(data :any) {
    return this.prismaService.especialidades.create(data)
  
  }
  Showdocents(){return this.prismaService.especialidades.findMany()
}}