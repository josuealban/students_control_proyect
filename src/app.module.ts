import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CreditosModule } from './creditos/creditos.module';
import { MatriculasModule } from './matriculas/matriculas/matriculas.module';
import {  Subjectwithdocentmodule } from './materia-docente/materia-docente/materia-docente.module';
import { subjectmodule } from './materia/materia.module';
import { CycleModule } from './ciclos/ciclo.module';
import { SpecialityModule } from './especialidad/especialidad.module';
import { CarrerasModule } from './carreras/carreras/carreras.module';

import { DocenteModule } from './docente/docente.module';
import { StudentModule } from './estudiante/estudiante.module';
import { PrismaModule } from './prisma/prisma.module';


@Module({
  imports: [StudentModule, DocenteModule, CarrerasModule, SpecialityModule, CycleModule, subjectmodule,  subjectwithdocentmodule, MatriculasModule, CreditosModule,PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
