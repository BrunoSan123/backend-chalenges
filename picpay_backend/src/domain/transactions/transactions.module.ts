import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserTransactionEntity } from './entity/user_transactions.entity';
import { lojistaEntityTransaction } from './entity/lojista_transaction.entity';

@Module({
    imports:[TypeOrmModule.forFeature([UserTransactionEntity,lojistaEntityTransaction])]
})
export class TransactionsModule {}
