import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions } from 'typeorm';
import { Coquetel } from './entities/coquetel.entity';
import { CreateCoquetelDto } from './dto/create-coquetel.dto';
import { UpdateCoquetelDto } from './dto/update-coquetel.dto';
import { ObjectId } from 'mongodb';

@Injectable()
export class CoqueteisService {
  private readonly apiUrl = 'https://api.api-ninjas.com/v1/cocktail';
  private readonly apiKey = '8mIjQtiHb1mocwd59k9vwQ==i3B1me8evlrqPPvJ';
  fetchCoqueteisData: any;

  constructor(
    @InjectRepository(Coquetel)
    private coquetelRepository: Repository<Coquetel>,
    private readonly httpService: HttpService,
  ) {}

  async baixarESalvarCoqueteis(): Promise<void> {
    const requests = [];
    for (let i = 0; i < 50; i++) {
      requests.push(this.httpService.get(this.apiUrl, {
        headers: { 'X-Api-Key': this.apiKey },
      }).toPromise());
    }

    const responses = await Promise.all(requests);
    const coqueteis = responses.map(response => response.data);

    for (const coquetel of coqueteis) {
      const createCoquetelDto = new CreateCoquetelDto();
      createCoquetelDto.name = coquetel.name;
      createCoquetelDto.ingredients = coquetel.ingredients.join(', ');
      createCoquetelDto.instructions = coquetel.instructions;
      await this.create(createCoquetelDto);
    }
  }

  async create(createCoquetelDto: CreateCoquetelDto): Promise<Coquetel> {
    const coquetel = this.coquetelRepository.create(createCoquetelDto);
    return this.coquetelRepository.save(coquetel);
  }

  findAll(): Promise<Coquetel[]> {
    return this.coquetelRepository.find();
  }

  findOne(id: string): Promise<Coquetel> {
    return this.coquetelRepository.findOne({ where: { id: new ObjectId(id) } });
    
  }

  async update(id: string, updateCoquetelDto: UpdateCoquetelDto): Promise<Coquetel> {
    await this.coquetelRepository.update(id, updateCoquetelDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.coquetelRepository.delete(id);
  }
}

export default CoqueteisService;