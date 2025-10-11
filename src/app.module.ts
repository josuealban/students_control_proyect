import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppModule as AppTsxModule } from './app.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '5432', 10),
      username: 'postgres',
      password: 'josuealban4657',
      database: 'universidad',
      autoLoadEntities: true,
      synchronize: true,
    }),

   
    AppTsxModule,
  ],
})
export class AppModule {}
