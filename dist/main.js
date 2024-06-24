"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const coqueteis_service_1 = require("./coqueteis/coqueteis.service");
const logging_interceptor_1 = require("./logging/logging.interceptor");
const log_service_1 = require("./log/log.service");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const coqueteisService = app.get(coqueteis_service_1.CoqueteisService);
    const name = 'bloody mary';
    coqueteisService.fetchCoqueteisData(name).subscribe(data => {
        console.log('Dados recebidos:', data);
    }, error => {
        console.error('Erro ao buscar dados da API:', error);
    });
    async function bootstrap() {
        const app = await core_1.NestFactory.create(app_module_1.AppModule);
        const logService = app.get(log_service_1.LogService);
        app.useGlobalInterceptors(new logging_interceptor_1.LoggingInterceptor(logService));
        await app.listen(3000);
    }
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map