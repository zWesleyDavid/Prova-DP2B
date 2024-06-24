import { Module } from '@nestjs/common';
import { CoqueteisModule } from './coqueteis/coqueteis.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { AuthModule } from './auth/auth.module';
import { Log } from './log/log.entity';
import { LogService } from './log/log.service';
import { LogController } from './log/log.controller';
import { LogModule } from './log/log.module';

@Module({
  imports: [CoqueteisModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost:27017',
      useNewUrlParser: true,
      useUnifiedTopology: true,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    AuthModule,
    LogModule,
    TypeOrmModule.forFeature([Log]),
  ],
  controllers: [UserController, LogController],
  providers: [UserService, LogService],
})
export class AppModule {}