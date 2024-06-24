import { HttpService } from '@nestjs/axios';
import { Repository } from 'typeorm';
import { Coquetel } from './entities/coquetel.entity';
import { CreateCoquetelDto } from './dto/create-coquetel.dto';
import { UpdateCoquetelDto } from './dto/update-coquetel.dto';
export declare class CoqueteisService {
    private coquetelRepository;
    private readonly httpService;
    private readonly apiUrl;
    private readonly apiKey;
    fetchCoqueteisData: any;
    constructor(coquetelRepository: Repository<Coquetel>, httpService: HttpService);
    baixarESalvarCoqueteis(): Promise<void>;
    create(createCoquetelDto: CreateCoquetelDto): Promise<Coquetel>;
    findAll(): Promise<Coquetel[]>;
    findOne(id: string): Promise<Coquetel>;
    update(id: string, updateCoquetelDto: UpdateCoquetelDto): Promise<Coquetel>;
    remove(id: string): Promise<void>;
}
export default CoqueteisService;
