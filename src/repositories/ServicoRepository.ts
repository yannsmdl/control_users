import { IDatabase } from "../interfaces/database/IDatabase"
import { inject, injectable } from 'tsyringe';
import { IServicoRepository } from "../interfaces/repositories/IServicoRepository"
import { Servico } from "../models/Servico"
import { PoolClient } from "pg";
import { QueryServico } from "../querys/QueryServico";
import { CriarServicoViewModel, AlterarServicoViewModel, DeletarServicoViewModel, BuscarServicoViewModel } from "../interfaces/viewmodels/ServicoViewModel";

@injectable()
class ServicoRepository implements IServicoRepository{

    private query:QueryServico

    constructor(
        @inject("Postgres")
        private database:IDatabase
    ){
        this.query = new QueryServico()
    }
    async procurarDuplicidade(caminho:string, metodo: string, connection: PoolClient):Promise<Servico> {
        try{
            let values = [caminho,
                          metodo]
            let query = this.query.procurarDuplicidade()
            let result = await this.database.executeQuery({
                connection,
                values,
                query
            })
            const resultQuery: Servico =  result.rowCount>0?result.rows[0]:null
            return resultQuery
        }
        catch(error){
            throw error
        }
    }
    async listar(connection: PoolClient): Promise<Servico[]> {
        try{
            let values = []
            let query = this.query.listar()
            let result = await this.database.executeQuery({
                connection,
                values,
                query
            })
            const resultQuery: Servico[] =  result.rows
            return resultQuery
        }
        catch(error){
            throw error
        }
    }
    async qtde(data: BuscarServicoViewModel, connection: PoolClient): Promise<number> {
        try{
            let values = [data.id,
                          data.nome]
            let query = this.query.qtde()
            let result = await this.database.executeQuery({
                connection,
                values,
                query
            })
            const resultQuery: number =  parseInt(result.rows[0].count)
            return resultQuery
        }
        catch(error){
            throw error
        }
    }
    async buscar(data: BuscarServicoViewModel, connection: PoolClient): Promise<Servico[]> {
        try{
            let values = [data.id,
                          data.nome,
                          data.offset]
            let query = this.query.buscar()
            let result = await this.database.executeQuery({
                connection,
                values,
                query
            })
            const resultQuery: Servico[] =  result.rows
            return resultQuery
        }
        catch(error){
            throw error
        }
    }
    async procurarPorNome(nome: string, connection: PoolClient): Promise<Servico> {
        try{
            let values = [nome]
            let query = this.query.procurarPorNome()
            let result = await this.database.executeQuery({
                connection,
                values,
                query
            })
            const resultQuery: Servico =  result.rowCount>0?result.rows[0]:null
            return resultQuery
        }
        catch(error){
            throw error
        }
    }
    async criar(data: CriarServicoViewModel, connection: PoolClient): Promise<Servico> {
        try{
            let values = [data.nome,
                          data.caminho,
                          data.metodo,
                          data.criadopor]
            let query = this.query.criar()
            let result = await this.database.executeQuery({
                connection,
                values,
                query
            })
            const resultQuery: Servico = result.rows[0]
            return resultQuery
        }
        catch(error){
            throw error
        }
    }
    async alterar(data: AlterarServicoViewModel, connection: PoolClient): Promise<void> {
        try{
            let values = [data.nome,
                          data.caminho,
                          data.metodo,
                          data.alteradopor,
                          data.id]
            let query = this.query.alterar()
            await this.database.executeQuery({
                connection,
                values,
                query
            })
            return
        }
        catch(error){
            throw error
        }
    }
    async deletar(data: DeletarServicoViewModel, connection: PoolClient): Promise<void> {
        try{
            let values = [data.deletadopor,
                          data.id]
            let query = this.query.deletar()
            await this.database.executeQuery({
                connection,
                values,
                query
            })
            return
        }
        catch(error){
            throw error
        }
    }
    async procurarPorId(id: number, connection: PoolClient): Promise<Servico> {
        try{
            let values = [id]
            let query = this.query.procurarPorId()
            let result = await this.database.executeQuery({
                connection,
                values,
                query
            })
            const resultQuery: Servico =  result.rowCount>0?result.rows[0]:null
            return resultQuery
        }
        catch(error){
            throw error
        }
    }

}

export { ServicoRepository }