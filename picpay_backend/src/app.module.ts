/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './domain/user/user.module';
import { CarteiraModule } from './domain/carteira/carteira.module';
import { LojistaModule } from './domain/lojista/lojista.module';
import { TransactionsModule } from './domain/transactions/transactions.module';
import { LojistaService } from './domain/use_cases/lojista/lojista.service';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'postgres',
      database:process.env.DB_DATABASE,
      host:'localhost',
      port:Number(process.env.DB_PORT),
      username:process.env.DB_USER,
      password:process.env.DB_PASS,
      synchronize:true,
      autoLoadEntities:true,
      entities:[__dirname+'/**/*.entity{.js,ts}'],
    }),
    UserModule,
    CarteiraModule,
    LojistaModule,
    TransactionsModule
  ],
  controllers: [AppController],
  providers: [AppService, LojistaService],
})
export class AppModule {}
