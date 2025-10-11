import { PartialType } from '@nestjs/mapped-types';
import { subjectcreateDto } from './create-materia.dto';

export class UpdateSubjectDto extends PartialType(subjectcreateDto) {}
