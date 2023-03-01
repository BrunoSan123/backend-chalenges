import { Module } from '@nestjs/common';
import { lojistaEntity } from './entity/lojista.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LojistaService } from './use_cases/lojista/lojista.service';

@Module({
    imports:[TypeOrmModule.forFeature([lojistaEntity])],
    providers: [LojistaService]
})
export class LojistaModule {}
