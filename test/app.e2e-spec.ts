import { Test, TestingModule } from '@nestjs/testing';
import { CoqueteisController } from './coqueteis/coqueteis.controller';
import { CoqueteisService } from './coqueteis/coqueteis.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cocktail } from './entities/coquetel.entity';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { Coquetel } from 'src/coqueteis/entities/coquetel.entity';

describe('CocktailController', () => {
  let controller: CoqueteisController;
  let service: CoqueteisService;
  let repository: Repository<Coquetel>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule, TypeOrmModule.forRoot({
        type: 'sqlite',
        database: ':memory:',
        entities: [Coquetel],
        synchronize: true,
      }), TypeOrmModule.forFeature([Cocktail])],
      controllers: [CoqueteisController],
      providers: [CoqueteisService],
    }).compile();

    controller = module.get<CoqueteisController>(CoqueteisController);
    service = module.get<CoqueteisService>(CoqueteisService);
    repository = module.get<Repository<Coquetel>>(getRepositoryToken(Coquetel));
  });

  it('Deve ser definido', () => {
    expect(controller).toBeDefined();
  });

  it('Salvar Coqueteis', async () => {
    const name = 'margarita';
    jest.spyOn(service, 'baixarESalvarCoqueteis').mockImplementation(async () => {});

    await controller.baixarESalvarCoqueteis({ name });

    expect(service.fetchAndSaveCocktails).toHaveBeenCalledWith(name);
  });


});
