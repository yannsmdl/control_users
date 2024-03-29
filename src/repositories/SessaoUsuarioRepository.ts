import { IDatabase } from "../interfaces/database/IDatabase"
import { inject, injectable } from 'tsyringe';
import { PoolClient } from "pg";
import { QuerySessaoUsuario } from "../querys/QuerySessaoUsuario";
import { ISessaoUsuarioRepository } from "../interfaces/repositories/ISessaoUsuarioRepository";
import { SessaoUsuario } from "../models/SessaoUsuario";

@injectable()
class SessaoUsuarioRepository implements ISessaoUsuarioRepository{

    private query:QuerySessaoUsuario

    constructor(
        @inject("Postgres")
        private database:IDatabase
    ){
        this.query = new QuerySessaoUsuario()
    }
    async procurarPorIdUsuario(idusuario: number, connection: PoolClient): Promise<SessaoUsuario[]> {
        try{
            let values = [idusuario]
            let query = this.query.procurarPorIdUsuario()
            let result = await this.database.executeQuery({
                connection,
                values,
                query
            })
            const resultQuery: SessaoUsuario[] =  result.rows
            return resultQuery
        }
        catch(error){
            throw error
        }
    }
    async procurarPorTokenAcesso(tokenacesso: string, connection: PoolClient): Promise<SessaoUsuario> {
        try{
            let values = [tokenacesso]
            let query = this.query.procurarPorTokenAcesso()
            let result = await this.database.executeQuery({
                connection,
                values,
                query
            })
            const resultQuery: SessaoUsuario =  result.rowCount>0?result.rows[0]:null
            return resultQuery
        }
        catch(error){
            throw error
        }
    }
    async criar(idusuario: number, tokenacesso: string, connection: PoolClient): Promise<SessaoUsuario> {
        try{
            let values = [idusuario,
                          tokenacesso]
            let query = this.query.criar()
            let result = await this.database.executeQuery({
                connection,
                values,
                query
            })
            const resultQuery: SessaoUsuario =  result.rowCount>0?result.rows[0]:null
            return resultQuery
        }
        catch(error){
            throw error
        }
    }
    async atualizar(id: number, connection: PoolClient): Promise<void> {
        try{
            let values = [id]
            let query = this.query.atualizar()
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
    async desativarSessoes(idusuario: number, connection: PoolClient): Promise<void> {
        try{
            let values = [idusuario]
            let query = this.query.desativarSessoes()
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

}

export { SessaoUsuarioRepository }