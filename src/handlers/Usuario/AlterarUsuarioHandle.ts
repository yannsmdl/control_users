import { inject, injectable } from 'tsyringe';
import { IUsuarioRepository } from '../../interfaces/repositories/IUsuarioRepository';
import { PoolClient } from 'pg';
import { IAlterarUsuarioHandle } from '../../interfaces/handlers/Usuario/IAlterarUsuarioHandle';
import { AlterarUsuarioViewModel } from '../../interfaces/viewmodels/UsuarioViewModel';

@injectable()
class AlterarUsuarioHandle implements IAlterarUsuarioHandle {
    constructor(
        @inject("UsuarioRepository")
        private usuarioRepository:IUsuarioRepository
    ){
    }

    async execute(data: AlterarUsuarioViewModel, connection: PoolClient):Promise<void>{
        let usuarioExiste = await this.usuarioRepository.procurarPorId(data.id,connection)
        if (usuarioExiste == null){
            throw new Error("O usuário não existe")
        }
        usuarioExiste = await this.usuarioRepository.procurarPorEmail(data.email,connection)
        if(usuarioExiste && usuarioExiste.id != data.id){
            throw new Error("Esse e-mail já está cadastrado")
        }
        return await this.usuarioRepository.alterar(data,connection)
    }
}

export { AlterarUsuarioHandle }