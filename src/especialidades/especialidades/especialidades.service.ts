import { Injectable } from '@nestjs/common';

import { UpdateEspecialidadeDto}from './dto/update-especialidade.dto'

import { PrismaService } from 'src/prisma/prsima.service'

@Injectable()
export class specialtiesService{
  constructor(private readonly prismaService: PrismaService){}
  Createsspecialities(data:any) {
    return this.prismaService.especialidades.create(data)
  
  }
  Showspecialities(){return this.prismaService.especialidades.findMany()}
}