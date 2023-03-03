/* eslint-disable prettier/prettier */
import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../entity/user.entity';
import { UserDto } from '../user_dto/user.dto';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ){}

    async saveUser(data:UserDto): Promise<UserEntity>{
        const usuario = new UserEntity()
        usuario.nome=data.nome;
        usuario.sobrenome=data.sobrenome;
        usuario.email=data.email;
        usuario.senha=bcrypt.hashSync(data.senha,8);
        usuario.cpf=data.cpf;
        return await this.userRepository.save(this.userRepository.create(usuario))
    }

    async getUser(): Promise<UserEntity[]>{
        return await this.userRepository.find();
    }

    async getOneUser(id:string){
        try{
            return await this.userRepository.findOneOrFail({where:{id}});
        }catch(error){
            throw new HttpException('Não foi possivel achar',404,{
                cause:new Error(error)
            })
        }
    }

    async updateUser(id:string,data:UserDto){
        const user =await this.getOneUser(id);
        this.userRepository.merge(user,data);
        return await this.userRepository.save(user);
    }


    async deleteUser(id:string):Promise<void>{
        const existentUser =await this.getOneUser(id);

       try {
        this.userRepository.delete(existentUser)
       } catch (error) {
         new HttpException('Usuario não encontrado',404,{
            cause: new Error(error)
         })
        
       }
    }
}
