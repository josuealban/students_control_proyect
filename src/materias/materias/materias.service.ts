import { Injectable } from '@nestjs/common';

import { UpdateSubjectDto} from './dto/update-materia.dto';

import { PrismaService } from 'src/prisma/prsima.service'

@Injectable()
export class MateriasService{
  constructor(private readonly prismaService: PrismaService){}
  Createsubject(data :any) {
    return this.prismaService.subject.create(data)
  
  }
  Showsubject(){return this.prismaService.subject.findMany()}
}

