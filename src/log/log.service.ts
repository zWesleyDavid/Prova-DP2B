import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Log } from './log.entity';

@Injectable()
export class LogService {
  constructor(
    @InjectRepository(Log)
    private logsRepository: Repository<Log>,
  ) {}

  async create(log: Log): Promise<Log> {
    return this.logsRepository.save(log);
  }

  findAll(): Promise<Log[]> {
    return this.logsRepository.find();
  }
}
