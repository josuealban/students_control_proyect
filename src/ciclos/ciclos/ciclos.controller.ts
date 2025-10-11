import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import {cycleservice}from'./ciclos.service'
import { CreateCicloDto}from'./dto/create-ciclo.dto'
import { UpdateCicloDto}from'./dto/update-ciclo.dto'

@Controller('ciclos')
export class   Cyclecontroller {
  constructor(private readonly cycleservice:cycleservice){}

  @Post('Crear ciclos')
  cyclescreate(data :any) {
    return this.cycleservice.Createcycles(data);
  }

    @Get("muestrame los ciclos")
  Showcareer() {
    return this.cycleservice.Showcycles()
  }

}
  

