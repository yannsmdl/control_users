import { inject, injectable } from 'tsyringe';
import { IServicoRepository } from '../../interfaces/repositories/IServicoRepository';
import { PoolClient } from 'pg';
import { IBuscarServicoHandle } from '../../interfaces/handlers/Servico/IBuscarServicoHandle';
import { BuscarServicoViewModel, RetornoBuscaServicoViewModel } from '../../interfaces/viewmodels/ServicoViewModel';
import { Servico } from '../../models/Servico';

@injectable()
class BuscarServicoHandle implements IBuscarServicoHandle {
    constructor(
        @inject("ServicoRepository")
        private servicoRepository:IServicoRepository
    ){
    }
    async execute(data: BuscarServicoViewModel, connection: PoolClient): Promise<RetornoBuscaServicoViewModel> {
        const total: number = await this.servicoRepository.qtde(data,connection)
        const dataRetorno: Servico[] = await this.servicoRepository.buscar(data,connection)
        const retorno: RetornoBuscaServicoViewModel = {
            total:total,
            data:dataRetorno
        }
        return retorno
    }

}

export { BuscarServicoHandle }