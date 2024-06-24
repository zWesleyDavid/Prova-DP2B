import { Repository } from 'typeorm';
import { Log } from './log.entity';
export declare class LogService {
    private logsRepository;
    constructor(logsRepository: Repository<Log>);
    create(log: Log): Promise<Log>;
    findAll(): Promise<Log[]>;
}
