/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserService } from './use_cases/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UserService]
})
export class UserModule {}
