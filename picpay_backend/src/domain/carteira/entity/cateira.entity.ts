/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn,Column} from 'typeorm';

@Entity({name:'carteira'})
export class carteiraEntity{
    @PrimaryGeneratedColumn('uuid')
    wallet_id:string;

    @Column({name:'valor',nullable:false})
    valor:number;

    @Column({name:'envios', nullable:false})
    envios:number;

    @Column({name:'recebimentos',nullable:false})
    recebimentos:number;

    
}