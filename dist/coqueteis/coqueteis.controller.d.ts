import { CoqueteisService } from './coqueteis.service';
import { Coquetel } from './entities/coquetel.entity';
export declare class CoqueteisController {
    private readonly coqueteisService;
    constructor(coqueteisService: CoqueteisService);
    fetchAndSave(name: string): Promise<void>;
    findAll(): Promise<Coquetel[]>;
    findOne(id: string): Promise<Coquetel>;
    create(coquetel: Coquetel): Promise<Coquetel>;
    update(id: string, coquetel: Coquetel): Promise<Coquetel>;
    remove(id: string): Promise<void>;
}
export default CoqueteisController;
