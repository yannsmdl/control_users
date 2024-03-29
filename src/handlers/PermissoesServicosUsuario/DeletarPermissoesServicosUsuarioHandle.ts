import { inject, injectable } from 'tsyringe';
import { IPermissoesServicosUsuarioRepository } from '../../interfaces/repositories/IPermissoesServicosUsuarioRepository';
import { PoolClient } from 'pg';
import { DeletarPermissoesServicosUsuarioViewModel } from '../../interfaces/viewmodels/PermissoesServicosUsuarioViewModel';
import { IDeletarPermissoesServicosUsuarioHandle } from '../../interfaces/handlers/PermissoesServicosUsuario/IDeletarPermissoesServicosUsuarioHandle';

@injectable()
class DeletarPermissoesServicosUsuarioHandle implements IDeletarPermissoesServicosUsuarioHandle {
    constructor(
        @inject("PermissoesServicosUsuarioRepository")
        private servicoRepository:IPermissoesServicosUsuarioRepository
    ){
    }

    async execute(data: DeletarPermissoesServicosUsuarioViewModel, connection: PoolClient):Promise<void>{
        let servicoExiste = await this.servicoRepository.procurarPorId(data.id,connection)
        if (servicoExiste == null){
            throw new Error("A permissão do usuário não existe")
        }
        return await this.servicoRepository.deletar(data,connection)
    }
}

export { DeletarPermissoesServicosUsuarioHandle }