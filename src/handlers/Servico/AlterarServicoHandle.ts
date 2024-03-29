import { inject, injectable } from 'tsyringe';
import { IServicoRepository } from '../../interfaces/repositories/IServicoRepository';
import { PoolClient } from 'pg';
import { IAlterarServicoHandle } from '../../interfaces/handlers/Servico/IAlterarServicoHandle';
import { AlterarServicoViewModel } from '../../interfaces/viewmodels/ServicoViewModel';

@injectable()
class AlterarServicoHandle implements IAlterarServicoHandle {
    constructor(
        @inject("ServicoRepository")
        private servicoRepository:IServicoRepository
    ){
    }

    async execute(data: AlterarServicoViewModel, connection: PoolClient):Promise<void>{
        let servicoExiste = await this.servicoRepository.procurarPorId(data.id,connection)
        if (servicoExiste == null){
            throw new Error("O Serviço não existe")
        }
        servicoExiste = await this.servicoRepository.procurarPorNome(data.nome,connection)
        if(servicoExiste && servicoExiste.id != data.id){
            throw new Error("Já existe um serviço com esse nome cadastrado")
        }
        return await this.servicoRepository.alterar(data,connection)
    }
}

export { AlterarServicoHandle }