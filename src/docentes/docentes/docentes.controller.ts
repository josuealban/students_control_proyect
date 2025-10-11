import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DocentService } from './docentes.service';
import { CreateDocenteDto } from './dto/create-docente.dto';
import { UpdateDocenteDto } from './dto/update-docente.dto';

@Controller('docentes')
export class DocenteController {
  constructor(private readonly docenteService: DocentService) {}

  @Post("Crear docentes")
  Thisfuntiondocentcreate(data:any) {
    return this.docenteService.CreateDocentes(data);
  }

  @Get("muestrame todos los docentes")
  showalldocents() {
    return this.docenteService.Showdocents();
  }

}


