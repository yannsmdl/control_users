import { IDatabase } from "../interfaces/database/IDatabase"
import { inject, injectable } from 'tsyringe';
import { IPermissoesServicosUsuarioRepository } from "../interfaces/repositories/IPermissoesServicosUsuarioRepository"
import { PermissoesServicosUsuario } from "../models/PermissoesServicosUsuario"
import { PoolClient } from "pg";
import { QueryPermissoesServicosUsuario } from "../querys/QueryPermissoesServicosUsuario";
import { CriarPermissoesServicosUsuarioViewModel, AlterarPermissoesServicosUsuarioViewModel, BuscarPermissoesServicosUsuarioViewModel, DeletarPermissoesServicosUsuarioViewModel } from "../interfaces/viewmodels/PermissoesServicosUsuarioViewModel";

@injectable()
class PermissoesServicosUsuarioRepository implements IPermissoesServicosUsuarioRepository{

    private query:QueryPermissoesServicosUsuario

    constructor(
        @inject("Postgres")
        private database:IDatabase
    ){
        this.query = new QueryPermissoesServicosUsuario()
    }
    async procurarPorId(id: number, connection: PoolClient): Promise<PermissoesServicosUsuario> {
        try{
            let values = [id]
            let query = this.query.procurarPorId()
            let result = await this.database.executeQuery({
                connection,
                values,
                query
            })
            const resultQuery: PermissoesServicosUsuario =  result.rowCount>0?result.rows[0]:null
            return resultQuery
        }
        catch(error){
            throw error
        }
    }
    async deletar(data: DeletarPermissoesServicosUsuarioViewModel, connection: PoolClient): Promise<void> {
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
    async procurarPorIdUsuarioEIdServico(idusuario:number,idservico:number, connection: PoolClient):Promise<PermissoesServicosUsuario> {
        try{
            let values = [idusuario,
                          idservico]
            let query = this.query.procurarPorIdUsuarioEIdServico()
            let result = await this.database.executeQuery({
                connection,
                values,
                query
            })
            const resultQuery: PermissoesServicosUsuario =  result.rowCount>0?result.rows[0]:null
            return resultQuery
        }
        catch(error){
            throw error
        }
    }
    async criar(data: CriarPermissoesServicosUsuarioViewModel, connection: PoolClient): Promise<PermissoesServicosUsuario> {
        try{
            let values = [data.idusuario,
                          data.idservico,
                          data.podeconsultar,
                          data.podeinserir,
                          data.podealterar,
                          data.podedeletar,
                          data.criadopor]
            let query = this.query.criar()
            let result = await this.database.executeQuery({
                connection,
                values,
                query
            })
            const resultQuery: PermissoesServicosUsuario = result.rows[0]
            return resultQuery
        }
        catch(error){
            throw error
        }
    }
    async alterar(data: AlterarPermissoesServicosUsuarioViewModel, connection: PoolClient): Promise<void> {
        try{
            let values = [data.podeconsultar,
                          data.podeinserir,
                          data.podealterar,
                          data.podedeletar,
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
    async procurarPorIdUsuario(idusuario: number, connection: PoolClient): Promise<PermissoesServicosUsuario[]> {
        try{
            let values = [idusuario]
            let query = this.query.procurarPorIdUsuario()
            let result = await this.database.executeQuery({
                connection,
                values,
                query
            })
            const resultQuery: PermissoesServicosUsuario[] =  result.rows
            return resultQuery
        }
        catch(error){
            throw error
        }
    }

}

export { PermissoesServicosUsuarioRepository }