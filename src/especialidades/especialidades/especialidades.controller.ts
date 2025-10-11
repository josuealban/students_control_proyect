import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { specialtiesService } from './especialidades.service';
import { CreateEspecialidadeDto } from './dto/create-especialidade.dto';
import { UpdateEspecialidadeDto } from './dto/update-especialidade.dto';

@Controller('especialidades')
export class specialtiesController {
  constructor(private readonly docenteService: specialtiesService) {}

  @Post("Crear especialidades")
 specialitycreate(data:any) {
    return this.docenteService.Createsspecialities(data);
  }

  @Get("muestrame todas las especialidades")
  showallspecialities(){
    return this.docenteService.Showspecialities();
  }

}