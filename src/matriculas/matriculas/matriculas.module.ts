import { Module } from '@nestjs/common';
import { MatriculaService }  from'./matriculas.service';
import { MatriculaController } from './matriculas.controller';
import { PrismaService } from 'src/prisma/prsima.service'
@Module({
  controllers: [MatriculaController],
  providers: [MatriculaService, PrismaService],
})
export class MatriculasModule {}
