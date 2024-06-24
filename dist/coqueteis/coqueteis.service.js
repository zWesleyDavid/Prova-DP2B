"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoqueteisService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const coquetel_entity_1 = require("./entities/coquetel.entity");
const create_coquetel_dto_1 = require("./dto/create-coquetel.dto");
const mongodb_1 = require("mongodb");
let CoqueteisService = class CoqueteisService {
    constructor(coquetelRepository, httpService) {
        this.coquetelRepository = coquetelRepository;
        this.httpService = httpService;
        this.apiUrl = 'https://api.api-ninjas.com/v1/cocktail';
        this.apiKey = '8mIjQtiHb1mocwd59k9vwQ==i3B1me8evlrqPPvJ';
    }
    async baixarESalvarCoqueteis() {
        const requests = [];
        for (let i = 0; i < 50; i++) {
            requests.push(this.httpService.get(this.apiUrl, {
                headers: { 'X-Api-Key': this.apiKey },
            }).toPromise());
        }
        const responses = await Promise.all(requests);
        const coqueteis = responses.map(response => response.data);
        for (const coquetel of coqueteis) {
            const createCoquetelDto = new create_coquetel_dto_1.CreateCoquetelDto();
            createCoquetelDto.name = coquetel.name;
            createCoquetelDto.ingredients = coquetel.ingredients.join(', ');
            createCoquetelDto.instructions = coquetel.instructions;
            await this.create(createCoquetelDto);
        }
    }
    async create(createCoquetelDto) {
        const coquetel = this.coquetelRepository.create(createCoquetelDto);
        return this.coquetelRepository.save(coquetel);
    }
    findAll() {
        return this.coquetelRepository.find();
    }
    findOne(id) {
        return this.coquetelRepository.findOne({ where: { id: new mongodb_1.ObjectId(id) } });
    }
    async update(id, updateCoquetelDto) {
        await this.coquetelRepository.update(id, updateCoquetelDto);
        return this.findOne(id);
    }
    async remove(id) {
        await this.coquetelRepository.delete(id);
    }
};
exports.CoqueteisService = CoqueteisService;
exports.CoqueteisService = CoqueteisService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(coquetel_entity_1.Coquetel)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        axios_1.HttpService])
], CoqueteisService);
exports.default = CoqueteisService;
//# sourceMappingURL=coqueteis.service.js.map