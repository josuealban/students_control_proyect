import { Module } from '@nestjs/common';
import {cycleservice}from'./ciclos.service';
import { Cyclecontroller}from'./ciclos.controller';
import { PrismaService } from 'src/prisma/prsima.service';

@Module({
  controllers: [Cyclecontroller],
  providers: [cycleservice, PrismaService],
})
export class DocenteModule {}
