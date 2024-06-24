import { Controller, Get } from '@nestjs/common';
import { LogService } from './log.service';
import { Log } from './log.entity';

@Controller('logs')
export class LogController {
  constructor(private readonly logService: LogService) {}

  @Get()
  findAll(): Promise<Log[]> {
    return this.logService.findAll();
  }
}
