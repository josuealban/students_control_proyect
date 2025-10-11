import { Module } from '@nestjs/common';
import { specialtiesService } from './especialidades.service';
import { specialtiesController } from './especialidades.controller';
import { PrismaService } from 'src/prisma/prsima.service'

@Module({
  controllers: [specialtiesController],
  providers: [specialtiesService, PrismaService],
})
export class DocenteModule {}
