import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import {CareerService} from './carreras.service';
import {CreateCarreraDto} from './dto/create-carrera.dto';
import { UpdateCarreraDto} from './dto/update-carrera.dto';

@Controller('carreras')
export class Careercontroller {
  constructor(private readonly careerService: CareerService) {}

  @Post("crear carrera")
 careercreate(data :any){
    return this.careerService.Createcareer(data)
  }

  @Get("muestrame todas las carreras")
  Showcareer() {
    return this.careerService.Showcareer()
  }

}