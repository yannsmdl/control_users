import { inject, injectable } from 'tsyringe';
import { Usuario } from '../../models/Usuario';
import { IUsuarioRepository } from '../../interfaces/repositories/IUsuarioRepository';
import { PoolClient } from 'pg';
import { ICriarUsuarioHandle } from '../../interfaces/handlers/Usuario/ICriarUsuarioHandle';
import { CriarUsuarioViewModel } from '../../interfaces/viewmodels/UsuarioViewModel';
import { hash } from 'bcryptjs';


@injectable()
class CriarUsuarioHandle implements ICriarUsuarioHandle {
    constructor(
        @inject("UsuarioRepository")
        private usuarioRepository:IUsuarioRepository
    ){
    }

    async execute(data: CriarUsuarioViewModel, connection: PoolClient):Promise<Usuario>{
        const usuarioExiste = await this.usuarioRepository.procurarPorEmail(data.email,connection)
        if(usuarioExiste){
            throw new Error("Esse e-mail já está cadastrado")
        }
        const senhaHash = await hash(data.senha,8)
        data.senha = senhaHash
        return await this.usuarioRepository.criar(data,connection)
    }
}

export { CriarUsuarioHandle }