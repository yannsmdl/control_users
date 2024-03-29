import { inject, injectable } from 'tsyringe';
import { IUsuarioRepository } from '../../interfaces/repositories/IUsuarioRepository';
import { PoolClient } from 'pg';
import { IListarUsuarioHandle } from '../../interfaces/handlers/Usuario/IListarUsuarioHandle';
import { Usuario } from '../../models/Usuario';

@injectable()
class ListarUsuarioHandle implements IListarUsuarioHandle {
    constructor(
        @inject("UsuarioRepository")
        private usuarioRepository:IUsuarioRepository
    ){
    }
    async execute(connection: PoolClient): Promise<Usuario[]> {
        return await this.usuarioRepository.listar(connection)
    }

}

export { ListarUsuarioHandle }