/* eslint-disable prettier/prettier */
import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { lojistaEntity } from '../../entity/lojista.entity';
import { Repository } from 'typeorm';
import { lojistaDTO } from '../../lojista_dto/lojista.dto';
import * as bcrypt from 'bcrypt'

@Injectable()
export class LojistaService {
    constructor(
        @InjectRepository(lojistaEntity)
        private readonly lojistaRepoditory:Repository<lojistaEntity>
    ){}

    async saveLojista(data:lojistaDTO):Promise<lojistaEntity>{
        const lojista = new lojistaEntity()
        lojista.nome=data.nome;
        lojista.sobrenome=data.sobrenome;
        lojista.cnpj=data.cnpj,
        lojista.senha =bcrypt.hashSync(data.senha,8);
        return this.lojistaRepoditory.save(this.lojistaRepoditory.create(lojista))

    }

    async getLojista():Promise<lojistaEntity[]>{
        return this.lojistaRepoditory.find()
    }

    async getOneLojista(id:string){
        try {
            return this.lojistaRepoditory.findOneOrFail({where:{id}})
        } catch (error) {
            throw new HttpException('Não foi possivel achar o lojista',404,{
                cause:new Error(error)
            })
        }
    }

    async updateLojista(id:string,data:lojistaDTO){
        const existentLojist= await this.getOneLojista(id);
        this.lojistaRepoditory.merge(existentLojist,data);
        return await this.lojistaRepoditory.save(existentLojist)
    }

    async deleteLojista(id:string):Promise<void>{
        const existentLojist= await this.getOneLojista(id);

       try {
        this.lojistaRepoditory.delete(existentLojist)
       } catch (error) {
         new HttpException('Lojista não encontrado',404,{
            cause: new Error(error)
         })
        
       }
    }



}

