import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { studentsService} from './estudiantes.service';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';

@Controller('estudiante')
export class estudianteController {
  constructor(private readonly estudianteservice: studentsService) {}
  @Post("Crear estudiante")
  Thisfuntionstudentscreate(data:any) {
    return this.estudianteservice. Createestudiantes(data)
  }

  @Get()
  showallstudents() {
    return this.estudianteservice.Showstudents();
  }

}