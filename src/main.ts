// src/main.ts

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CoqueteisService } from './coqueteis/coqueteis.service';
import { LoggingInterceptor } from './logging/logging.interceptor';
import { LogService } from './log/log.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const coqueteisService = app.get(CoqueteisService);

  const name = 'bloody mary';

  coqueteisService.fetchCoqueteisData(name).subscribe(
    data => {
      console.log('Dados recebidos:', data);
    },
    error => {
      console.error('Erro ao buscar dados da API:', error);
    }
  );

  async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const logService = app.get(LogService);
    app.useGlobalInterceptors(new LoggingInterceptor(logService));
    await app.listen(3000);
  }

  await app.listen(3000);
}
bootstrap();
