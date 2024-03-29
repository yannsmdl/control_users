import { inject, injectable } from 'tsyringe';
import { IServicoRepository } from '../../interfaces/repositories/IServicoRepository';
import { PoolClient } from 'pg';
import { IListarServicoHandle } from '../../interfaces/handlers/Servico/IListarServicoHandle';
import { Servico } from '../../models/Servico';

@injectable()
class ListarServicoHandle implements IListarServicoHandle {
    constructor(
        @inject("ServicoRepository")
        private servicoRepository:IServicoRepository
    ){
    }
    async execute(connection: PoolClient): Promise<Servico[]> {
        return await this.servicoRepository.listar(connection)
    }

}

export { ListarServicoHandle }