import { Module } from '@nestjs/common';
import { studentsService }  from'./estudiantes.service';
import { estudianteController } from './estudiantes.controller';
import { PrismaService } from 'src/prisma/prsima.service'
@Module({
  controllers: [estudianteController],
  providers: [studentsService,PrismaService],
})
export class studentmodule {}
