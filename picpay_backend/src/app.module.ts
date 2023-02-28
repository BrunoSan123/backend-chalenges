import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './domain/user/user.module';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'postgres',
      database:process.env.DB,
      host:process.env.HOST,
      port:Number(process.env.PORT),
      username:process.env.USER,
      password:process.env.PASS,
      synchronize:true,
      entities:[__dirname+'/**/*.entity{.js,ts}'],
    }),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
