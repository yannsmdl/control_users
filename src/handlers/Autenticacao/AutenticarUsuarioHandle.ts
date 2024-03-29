import { inject, injectable } from 'tsyringe';
import { compare } from 'bcryptjs'
import dayjs from 'dayjs';
import * as jwt from 'jsonwebtoken'; 
import { IAutenticarUsuarioHandle } from '../../interfaces/handlers/Autenticacao/IAutenticarUsuarioHandle';
import { IUsuarioRepository } from '../../interfaces/repositories/IUsuarioRepository';
import { InfosRetornoLoginViewModel, LoginViewModel } from '../../interfaces/viewmodels/LoginViewModel';
import { IResponseLoginDTO } from '../../interfaces/dto/IResponseLoginDTO';
import { PoolClient } from 'pg';
import { ISessaoUsuarioRepository } from '../../interfaces/repositories/ISessaoUsuarioRepository';

@injectable()
class AutenticarUsuarioHandle implements IAutenticarUsuarioHandle {
    constructor(
        @inject("UsuarioRepository")
        private usuarioRepository:IUsuarioRepository,
        @inject("SessaoUsuarioRepository")
        private sessaoUsuarioRepository: ISessaoUsuarioRepository
    ){
    }

    async execute(data: LoginViewModel, connection: PoolClient):Promise<IResponseLoginDTO>{
        const usuarioExiste = await this.usuarioRepository.procurarPorEmail(data.email,connection)
        if (!usuarioExiste){
            throw new Error("E-mail não existe ou senha incorreta")
        }

        const comparacaoSenha = await compare(data.senha,usuarioExiste.senha)

        if(!comparacaoSenha){
            throw new Error("E-mail não existe ou senha incorreta")
        }


        const expires_date = dayjs().add(1,"day").toDate()

        const dataRetorno: InfosRetornoLoginViewModel = {
            nome:usuarioExiste.nome,
            email:usuarioExiste.email,
            datanascimento:usuarioExiste.datanascimento
        }

        const token = jwt.sign(dataRetorno,process.env.SECRET_TOKEN,{ 
            subject: usuarioExiste.id.toString(),
            expiresIn:'1d'
        })
            
        await this.sessaoUsuarioRepository.desativarSessoes(usuarioExiste.id,connection)

        await this.sessaoUsuarioRepository.criar(
            usuarioExiste.id,
            token,
            connection
        )

        const retorno:IResponseLoginDTO = {
            token,
            expiresIn:expires_date,
            id: usuarioExiste.id
        }

        return retorno
    }
}

export { AutenticarUsuarioHandle }