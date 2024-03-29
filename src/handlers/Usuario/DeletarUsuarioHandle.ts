import { inject, injectable } from 'tsyringe';
import { IUsuarioRepository } from '../../interfaces/repositories/IUsuarioRepository';
import { PoolClient } from 'pg';
import { DeletarUsuarioViewModel } from '../../interfaces/viewmodels/UsuarioViewModel';
import { IDeletarUsuarioHandle } from '../../interfaces/handlers/Usuario/IDeletarUsuarioHandle';

@injectable()
class DeletarUsuarioHandle implements IDeletarUsuarioHandle {
    constructor(
        @inject("UsuarioRepository")
        private usuarioRepository:IUsuarioRepository
    ){
    }

    async execute(data: DeletarUsuarioViewModel, connection: PoolClient):Promise<void>{
        let usuarioExiste = await this.usuarioRepository.procurarPorId(data.id,connection)
        if (usuarioExiste == null){
            throw new Error("O usuário não existe")
        }
        return await this.usuarioRepository.deletar(data,connection)
    }
}

export { DeletarUsuarioHandle }