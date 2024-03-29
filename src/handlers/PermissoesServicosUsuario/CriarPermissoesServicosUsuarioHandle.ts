import { inject, injectable } from 'tsyringe';
import { PermissoesServicosUsuario } from '../../models/PermissoesServicosUsuario';
import { IPermissoesServicosUsuarioRepository } from '../../interfaces/repositories/IPermissoesServicosUsuarioRepository';
import { PoolClient } from 'pg';
import { ICriarPermissoesServicosUsuarioHandle } from '../../interfaces/handlers/PermissoesServicosUsuario/ICriarPermissoesServicosUsuarioHandle';
import { CriarPermissoesServicosUsuarioViewModel } from '../../interfaces/viewmodels/PermissoesServicosUsuarioViewModel';

@injectable()
class CriarPermissoesServicosUsuarioHandle implements ICriarPermissoesServicosUsuarioHandle {
    constructor(
        @inject("PermissoesServicosUsuarioRepository")
        private servicoRepository:IPermissoesServicosUsuarioRepository
    ){
    }

    async execute(data: CriarPermissoesServicosUsuarioViewModel[], connection: PoolClient):Promise<PermissoesServicosUsuario[]>{
        const list_return:PermissoesServicosUsuario[] = []
        for (let i in data){
            const servicoExiste = await this.servicoRepository.procurarPorIdUsuarioEIdServico(data[i].idusuario,data[i].idservico,connection)
            if(servicoExiste){
                throw new Error("Esse usuário já tem uma permissão cadastrada para esse serviço")
            }
            const permissao = await this.servicoRepository.criar(data[i],connection)
            list_return.push(permissao)
        }
        
        return list_return
    }
}

export { CriarPermissoesServicosUsuarioHandle }