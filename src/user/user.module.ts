import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('services.user.database.host'),
        port: configService.get<number>('services.user.database.port'),
        username: configService.get<string>('services.user.database.username'),
        password: configService.get<string>('services.user.database.password'),
        schema: configService.get<string>('services.user.database.schema'),
        synchronize: true,
        entities: [UserEntity],
      }),
    }),
  ],
})
export class UserModule {}
