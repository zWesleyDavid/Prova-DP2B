import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LogService } from '../log/log.service';
import { Log } from '../log/log.entity';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private readonly logService: LogService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    const request = context.switchToHttp().getRequest();
    const { method, url } = request;

    return next
      .handle()
      .pipe(
        tap(() => {
          const responseTime = Date.now() - now;
          const log = new Log();
          log.route = url;
          log.method = method;
          log.responseTime = responseTime;
          this.logService.create(log);
        }),
      );
  }
}
