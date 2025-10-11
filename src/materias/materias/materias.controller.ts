import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MateriasService} from './materias.service';
import { subjectcreateDto } from './dto/create-materia.dto';
import { UpdateSubjectDto } from './dto/update-materia.dto';

@Controller('materia')
export class MateriasController {
  constructor(private readonly subjectservice: MateriasService) {}
  @Post("crear una nueva materia")
 Createsubjects(@Body() data: subjectcreateDto){
    return this.subjectservice. Createsubject(data)
  }

  @Get('Mostrar todas las materias')
  Showsubjects(){
    return this.subjectservice.Showsubject();
  }

}