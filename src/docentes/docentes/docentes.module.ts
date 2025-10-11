import { Module } from '@nestjs/common';
import { DocentService } from './docentes.service';
import { DocenteController } from './docentes.controller';
import { PrismaService } from 'src/prisma/prsima.service';

@Module({
  controllers: [DocenteController],
  providers: [DocentService, PrismaService],
})
export class DocenteModule {}
