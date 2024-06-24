import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards, UseInterceptors, HttpException, HttpStatus,} from '@nestjs/common';
import { CoqueteisService } from './coqueteis.service';
import { Coquetel } from './entities/coquetel.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { LoggingInterceptor } from '../logging/logging.interceptor';
import { CustomException } from 'src/exceptions/custom-exception/custom-exception';

@Controller('coqueteis')
@UseGuards(JwtAuthGuard)
@UseInterceptors(LoggingInterceptor)
export class CoqueteisController {
  constructor(private readonly coqueteisService: CoqueteisService) {}

  @Post('fetch')
  async fetchAndSave(@Body('name') name: string): Promise<void> {
    await this.coqueteisService.baixarESalvarCoqueteis();
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(): Promise<Coquetel[]> {
    try {
      return await this.coqueteisService.findAll();
    } catch (error) {
      throw new HttpException('Falha ao obter informações', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Coquetel> {
    try {
      const coquetel = await this.coqueteisService.findOne(id);
      if (!coquetel) {
        throw new HttpException('Não encontrado', HttpStatus.NOT_FOUND);
      }
      return coquetel;
    } catch (error) {
      throw new CustomException();
    }
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() coquetel: Coquetel): Promise<Coquetel> {
    try {
      return await this.coqueteisService.create(coquetel);
    } catch (error) {
      throw new HttpException('Falha ao criar', HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Param('id') id: string, @Body() coquetel: Coquetel): Promise<Coquetel> {
    try {
      return await this.coqueteisService.update(id, coquetel);
    } catch (error) {
      throw new HttpException('Falha ao atualizar', HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    try {
      return await this.coqueteisService.remove(id);
    } catch (error) {
      throw new HttpException('Falha ao remover', HttpStatus.BAD_REQUEST);
    }
  }
}

export default CoqueteisController;