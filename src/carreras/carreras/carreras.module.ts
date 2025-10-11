import { Module } from '@nestjs/common';
import { CareerService}from'./carreras.service';
import { Careercontroller} from './carreras.controller';
import { PrismaService } from 'src/prisma/prsima.service';

@Module({
  controllers: [Careercontroller],
  providers: [CareerService, PrismaService],
})
export class CarrerasModule {}
