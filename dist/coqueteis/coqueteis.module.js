"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoqueteisModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const coqueteis_service_1 = require("./coqueteis.service");
const coqueteis_controller_1 = require("./coqueteis.controller");
const axios_1 = require("@nestjs/axios");
const coquetel_entity_1 = require("./entities/coquetel.entity");
let CoqueteisModule = class CoqueteisModule {
};
exports.CoqueteisModule = CoqueteisModule;
exports.CoqueteisModule = CoqueteisModule = __decorate([
    (0, common_1.Module)({
        imports: [axios_1.HttpModule, typeorm_1.TypeOrmModule.forFeature([coquetel_entity_1.Coquetel])],
        controllers: [coqueteis_controller_1.CoqueteisController],
        providers: [coqueteis_service_1.CoqueteisService],
    })
], CoqueteisModule);
exports.default = CoqueteisModule;
//# sourceMappingURL=coqueteis.module.js.map