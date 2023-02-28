import {Entity,PrimaryGeneratedColumn,Column, CreateDateColumn} from 'typeorm'

@Entity({name:'usuario'})
export class UserEntity{

    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column({name:'nome',nullable:true})
    nome:string;

    @Column({name:'sobrenome',nullable:false})
    sobrenome:string;

    @Column({name:'cpf',nullable:false,unique:true})
    cpf:string;

    @Column({name:'email',nullable:true})
    email:string;

    @Column({name:'senha',nullable:false})
    senha:string;



}