import { UserEntity } from 'src/domain/user/entity/user.entity';
import {Entity,PrimaryGeneratedColumn,Column,OneToMany} from 'typeorm'

@Entity({name:'transacões_do_usuario'})
export class UserTransactionEntity{
    @PrimaryGeneratedColumn('uuid')
    transaction_id:string;

    @Column({name:'nome_da_transação',nullable:false})
    nomeDaTransacao:string

    @Column({name:'valor',nullable:false})
    valor:number;

    @Column({name:'alvo_da_transação',nullable:false})
    alvoDaTransação:string;

    @Column({name:'origem',nullable:false})
    origem:string;

    @OneToMany(()=>UserEntity, (usuario)=>usuario.id)
    transações:UserEntity;
}