import { inject, injectable } from 'tsyringe';
import { IPermissoesServicosUsuarioRepository } from '../../interfaces/repositories/IPermissoesServicosUsuarioRepository';
import { PoolClient } from 'pg';
import { IAlterarPermissoesServicosUsuarioHandle } from '../../interfaces/handlers/PermissoesServicosUsuario/IAlterarPermissoesServicosUsuarioHandle';
import { AlterarPermissoesServicosUsuarioViewModel } from '../../interfaces/viewmodels/PermissoesServicosUsuarioViewModel';

@injectable()
class AlterarPermissoesServicosUsuarioHandle implements IAlterarPermissoesServicosUsuarioHandle {
    constructor(
        @inject("PermissoesServicosUsuarioRepository")
        private servicoRepository:IPermissoesServicosUsuarioRepository
    ){
    }

    async execute(data: AlterarPermissoesServicosUsuarioViewModel, connection: PoolClient):Promise<void>{
        let servicoExiste = await this.servicoRepository.procurarPorId(data.id,connection)
        if (servicoExiste == null){
            throw new Error("A permissão do usuário não existe")
        }
        return await this.servicoRepository.alterar(data,connection)
    }
}

export { AlterarPermissoesServicosUsuarioHandle }