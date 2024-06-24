import { PartialType } from '@nestjs/mapped-types';
import { CreateCoquetelDto } from './create-coquetel.dto';

export class UpdateCoquetelDto extends PartialType(CreateCoquetelDto) { }
