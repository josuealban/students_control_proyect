import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MatriculaService} from './matriculas.service';
import { CreateMatriculaDto } from './dto/create-matricula.dto';
import { UpdateMatriculaDto } from './dto/update-matricula.dto';

@Controller('Matriculas')
export class MatriculaController {
  constructor(private readonly Matriculasservice: MatriculaService) {}
  @Post("crear una nueva matricula")
 CreatenewMatricula(@Body() data: CreateMatriculaDto){
    return this.Matriculasservice. createMatricula(data)
  }

  @Get('Mostrar todas las matriculas')
  ShowallMatriculas (){
    return this.Matriculasservice.showMatricula();
  }

}