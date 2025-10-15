import { Controller, Get, Post, Body } from '@nestjs/common';
import { StudentsService } from './estudiantes.service';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';

@Controller('estudiante')
export class EstudianteController {
  constructor(private readonly estudiantesService: StudentsService) {}

  @Post('Crearestudiante')
  async createEstudiante(@Body() data: CreateEstudianteDto) {
    console.log('Datos recibidos:', data); // Para debug
    return this.estudiantesService.Createestudiantes(data);
  }

  @Get()
  async showAllStudents() {
    return this.estudiantesService.Showstudents();
  }
}
