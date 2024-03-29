import { inject, injectable } from 'tsyringe';
import { IServicoRepository } from '../../interfaces/repositories/IServicoRepository';
import { PoolClient } from 'pg';
import { DeletarServicoViewModel } from '../../interfaces/viewmodels/ServicoViewModel';
import { IDeletarServicoHandle } from '../../interfaces/handlers/Servico/IDeletarServicoHandle';

@injectable()
class DeletarServicoHandle implements IDeletarServicoHandle {
    constructor(
        @inject("ServicoRepository")
        private servicoRepository:IServicoRepository
    ){
    }

    async execute(data: DeletarServicoViewModel, connection: PoolClient):Promise<void>{
        let servicoExiste = await this.servicoRepository.procurarPorId(data.id,connection)
        if (servicoExiste == null){
            throw new Error("O serviço não existe")
        }
        return await this.servicoRepository.deletar(data,connection)
    }
}

export { DeletarServicoHandle }