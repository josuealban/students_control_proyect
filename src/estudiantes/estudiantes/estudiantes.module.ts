import { Module } from '@nestjs/common';
import { StudentsService } from './estudiantes.service';
import { EstudianteController } from './estudiantes.controller';
import { PrismaService } from 'src/prisma/prsima.service';

@Module({
  controllers: [EstudianteController],
  providers: [StudentsService, PrismaService],
})
export class StudentModule {}
