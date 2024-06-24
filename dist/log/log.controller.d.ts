import { LogService } from './log.service';
import { Log } from './log.entity';
export declare class LogController {
    private readonly logService;
    constructor(logService: LogService);
    findAll(): Promise<Log[]>;
}
