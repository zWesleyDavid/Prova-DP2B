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
exports.CoqueteisController = void 0;
const common_1 = require("@nestjs/common");
const coqueteis_service_1 = require("./coqueteis.service");
const coquetel_entity_1 = require("./entities/coquetel.entity");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const logging_interceptor_1 = require("../logging/logging.interceptor");
const custom_exception_1 = require("../exceptions/custom-exception/custom-exception");
let CoqueteisController = class CoqueteisController {
    constructor(coqueteisService) {
        this.coqueteisService = coqueteisService;
    }
    async fetchAndSave(name) {
        await this.coqueteisService.baixarESalvarCoqueteis();
    }
    async findAll() {
        try {
            return await this.coqueteisService.findAll();
        }
        catch (error) {
            throw new common_1.HttpException('Falha ao obter informações', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findOne(id) {
        try {
            const coquetel = await this.coqueteisService.findOne(id);
            if (!coquetel) {
                throw new common_1.HttpException('Não encontrado', common_1.HttpStatus.NOT_FOUND);
            }
            return coquetel;
        }
        catch (error) {
            throw new custom_exception_1.CustomException();
        }
    }
    async create(coquetel) {
        try {
            return await this.coqueteisService.create(coquetel);
        }
        catch (error) {
            throw new common_1.HttpException('Falha ao criar', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async update(id, coquetel) {
        try {
            return await this.coqueteisService.update(id, coquetel);
        }
        catch (error) {
            throw new common_1.HttpException('Falha ao atualizar', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async remove(id) {
        try {
            return await this.coqueteisService.remove(id);
        }
        catch (error) {
            throw new common_1.HttpException('Falha ao remover', common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.CoqueteisController = CoqueteisController;
__decorate([
    (0, common_1.Post)('fetch'),
    __param(0, (0, common_1.Body)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CoqueteisController.prototype, "fetchAndSave", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CoqueteisController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CoqueteisController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [coquetel_entity_1.Coquetel]),
    __metadata("design:returntype", Promise)
], CoqueteisController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, coquetel_entity_1.Coquetel]),
    __metadata("design:returntype", Promise)
], CoqueteisController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CoqueteisController.prototype, "remove", null);
exports.CoqueteisController = CoqueteisController = __decorate([
    (0, common_1.Controller)('coqueteis'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)(logging_interceptor_1.LoggingInterceptor),
    __metadata("design:paramtypes", [coqueteis_service_1.CoqueteisService])
], CoqueteisController);
exports.default = CoqueteisController;
//# sourceMappingURL=coqueteis.controller.js.map