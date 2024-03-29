import { inject, injectable } from 'tsyringe';
import { IUsuarioRepository } from '../../interfaces/repositories/IUsuarioRepository';
import { PoolClient } from 'pg';
import { IBuscarUsuarioHandle } from '../../interfaces/handlers/Usuario/IBuscarUsuarioHandle';
import { BuscarUsuarioViewModel, RetornoBuscaUsuarioViewModel } from '../../interfaces/viewmodels/UsuarioViewModel';
import { Usuario } from '../../models/Usuario';

@injectable()
class BuscarUsuarioHandle implements IBuscarUsuarioHandle {
    constructor(
        @inject("UsuarioRepository")
        private usuarioRepository:IUsuarioRepository
    ){
    }
    async execute(data: BuscarUsuarioViewModel, connection: PoolClient): Promise<RetornoBuscaUsuarioViewModel> {
        const total: number = await this.usuarioRepository.qtde(data,connection)
        const dataRetorno: Usuario[] = await this.usuarioRepository.buscar(data,connection)
        const retorno: RetornoBuscaUsuarioViewModel = {
            total:total,
            data:dataRetorno
        }
        return retorno
    }

}

export { BuscarUsuarioHandle }