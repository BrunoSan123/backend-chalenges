/* eslint-disable prettier/prettier */
import { UserTransactionEntity } from 'src/domain/transactions/entity/user_transactions.entity';
import { carteiraEntity } from './../../carteira/entity/cateira.entity';
import { Entity, PrimaryGeneratedColumn, Column,OneToOne,JoinColumn,ManyToOne } from 'typeorm';
@Entity({ name: 'usuario' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ name: 'nome', nullable: true })
  nome: string;

  @Column({ name: 'sobrenome', nullable: false })
  sobrenome: string;

  @Column({ name: 'cpf', nullable: false, unique: true })
  cpf: string;

  @Column({ name: 'email', nullable: true })
  email: string;

  @Column({ name: 'senha', nullable: false })
  senha: string;

  @OneToOne(()=>carteiraEntity)
  @JoinColumn()
  carteira:carteiraEntity;

  @ManyToOne(()=>UserTransactionEntity,(user_transaction)=>user_transaction.transaction_id)
  transações:UserTransactionEntity[];
  



  
}
