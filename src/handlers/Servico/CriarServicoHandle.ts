import { inject, injectable } from 'tsyringe';
import { Servico } from '../../models/Servico';
import { IServicoRepository } from '../../interfaces/repositories/IServicoRepository';
import { PoolClient } from 'pg';
import { ICriarServicoHandle } from '../../interfaces/handlers/Servico/ICriarServicoHandle';
import { CriarServicoViewModel } from '../../interfaces/viewmodels/ServicoViewModel';

@injectable()
class CriarServicoHandle implements ICriarServicoHandle {
    constructor(
        @inject("ServicoRepository")
        private servicoRepository:IServicoRepository
    ){
    }

    async execute(data: CriarServicoViewModel, connection: PoolClient):Promise<Servico>{
        const servicoExiste = await this.servicoRepository.procurarDuplicidade(data.caminho,data.metodo,connection)
        if(servicoExiste){
            throw new Error("Já existe um serviço com esse nome cadastrado")
        }
        return await this.servicoRepository.criar(data,connection)
    }
}

export { CriarServicoHandle }