import { Module } from '@nestjs/common';
import { subjectwithdocentService }  from'./materia-docente.service';
import { subjectwithdocentController } from './materia-docente.controller';
import { PrismaService } from 'src/prisma/prsima.service'
@Module({
  controllers: [subjectwithdocentController],
  providers: [subjectwithdocentService, PrismaService],
})
export class SubjectwithStudentModule {}