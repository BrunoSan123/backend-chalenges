import { carteiraEntity } from 'src/domain/carteira/entity/cateira.entity';
import { lojistaEntityTransaction } from 'src/domain/transactions/entity/lojista_transaction.entity';
import {Entity,PrimaryGeneratedColumn,Column,OneToOne,JoinColumn,ManyToOne} from 'typeorm'

@Entity({name:'lojista'})
export class lojistaEntity{
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column({name:'nome',nullable:false})
    nome:string;

    @Column({name:'sobrenome',nullable:true})
    sobrenome:string;

    @Column({name:'cnpj',nullable:false})
    cnpj:string;


    @Column({name:'email',nullable:false})
    email:string;

    @Column({name:'senha',nullable:false})
    senha:string;

    @OneToOne(()=>carteiraEntity)
    @JoinColumn()
    carteira:carteiraEntity;

    @ManyToOne(()=>lojistaEntityTransaction,(lojista_transaction)=>lojista_transaction.transaction_id)
    transações:lojistaEntity[]







    
}