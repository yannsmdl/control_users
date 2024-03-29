import { inject, injectable } from 'tsyringe';
import { IUsuarioRepository } from '../../interfaces/repositories/IUsuarioRepository';
import { PoolClient } from 'pg';
import { IAlterarSenhaUsuarioHandle } from '../../interfaces/handlers/Usuario/IAlterarSenhaUsuarioHandle';
import { AlterarSenhaUsuarioViewModel } from '../../interfaces/viewmodels/UsuarioViewModel';
import { hash } from 'bcryptjs';

@injectable()
class AlterarSenhaUsuarioHandle implements IAlterarSenhaUsuarioHandle {
    constructor(
        @inject("UsuarioRepository")
        private usuarioRepository:IUsuarioRepository
    ){
    }

    async execute(data: AlterarSenhaUsuarioViewModel, connection: PoolClient):Promise<void>{
        let usuarioExiste = await this.usuarioRepository.procurarPorId(data.id,connection)
        if (usuarioExiste == null){
            throw new Error("O usuário não existe")
        }
        const senhaHash = await hash(data.senha,8)
        data.senha = senhaHash
        return await this.usuarioRepository.alterarSenha(data,connection)
    }
}

export { AlterarSenhaUsuarioHandle }