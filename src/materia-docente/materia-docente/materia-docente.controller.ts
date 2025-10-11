import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { subjectwithdocentService} from './materia-docente.service';
import { CreateMateriaDocenteDto } from './dto/create-materia-docente.dto';
import { UpdateMateriaDocenteDto } from './dto/update-materia-docente.dto';

@Controller('materia-docente')
export class subjectwithdocentController {
  constructor(private readonly docentwithsubjectservice: subjectwithdocentService) {}
  @Post("Crear docente y materia a impartir")
 Createnewdocentswithsubjects(@Body() data: CreateMateriaDocenteDto){
    return this.docentwithsubjectservice. Createdocentwithsubject(data)
  }

  @Get('Mostrar todos los docentes con las materias que imparten')
  showalldocentswiththesubjects(){
    return this.docentwithsubjectservice.Showdocentwithsubject();
  }

}