import { IsString, IsNumber, IsBoolean, IsDateString, IsOptional } from 'class-validator';

export class CreateEstudianteDto {
  @IsString()
  nombre: string;

  @IsString()
  apellido: string;

  @IsNumber()
  edad: number;

  @IsString()
  correoinstitucional: string;

  @IsString()
  identificacion: string;

  @IsString()
  telefono: string;

  @IsString()
  direccion: string;

  @IsString()
  genero: string;

  @IsDateString()
  fechanacimiento: Date;

  @IsBoolean()
  @IsOptional() // opcional en caso de que no se envíe
  estado?: boolean;
}
