/* eslint-disable prettier/prettier */
import { carteiraEntity } from './entity/cateira.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([carteiraEntity])],
})
export class CarteiraModule {}
