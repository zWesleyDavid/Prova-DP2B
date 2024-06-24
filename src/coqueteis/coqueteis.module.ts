import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoqueteisService } from './coqueteis.service';
import { CoqueteisController } from './coqueteis.controller';
import { HttpModule } from '@nestjs/axios';
import { Coquetel } from './entities/coquetel.entity';

@Module({ 
  imports: [HttpModule, TypeOrmModule.forFeature([Coquetel])],
  controllers: [CoqueteisController],
  providers: [CoqueteisService],
})
export class CoqueteisModule {}

export default CoqueteisModule;