import { inject, injectable } from 'tsyringe';
import { IPermissoesServicosUsuarioRepository } from '../../interfaces/repositories/IPermissoesServicosUsuarioRepository';
import { PoolClient } from 'pg';
import { IBuscarPermissoesServicosUsuarioHandle } from '../../interfaces/handlers/PermissoesServicosUsuario/IBuscarPermissoesServicosUsuarioHandle';
import { BuscarPermissoesServicosUsuarioViewModel, RetornoBuscaPermissoesServicosUsuarioViewModel } from '../../interfaces/viewmodels/PermissoesServicosUsuarioViewModel';
import { PermissoesServicosUsuario } from '../../models/PermissoesServicosUsuario';

@injectable()
class BuscarPermissoesServicosUsuarioHandle implements IBuscarPermissoesServicosUsuarioHandle {
    constructor(
        @inject("PermissoesServicosUsuarioRepository")
        private servicoRepository:IPermissoesServicosUsuarioRepository
    ){
    }
    async execute(data: BuscarPermissoesServicosUsuarioViewModel, connection: PoolClient): Promise<RetornoBuscaPermissoesServicosUsuarioViewModel> {
        const dataRetorno: PermissoesServicosUsuario[] = await this.servicoRepository.procurarPorIdUsuario(parseInt(data.idusuario),connection)
        const total: number = dataRetorno.length
        const retorno: RetornoBuscaPermissoesServicosUsuarioViewModel = {
            total:total,
            data:dataRetorno
        }
        return retorno
    }

}

export { BuscarPermissoesServicosUsuarioHandle }