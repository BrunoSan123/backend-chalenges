import { lojistaEntity } from 'src/domain/lojista/entity/lojista.entity';
import {Entity,PrimaryGeneratedColumn,Column, OneToMany} from 'typeorm'
@Entity({name:'transações_do_lojista'})
export class lojistaEntityTransaction{

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

    @OneToMany(()=>lojistaEntity, (lojista)=>lojista.id)
    transações:lojistaEntity;


}

