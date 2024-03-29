import { IDatabase } from "../interfaces/database/IDatabase"
import { inject, injectable } from 'tsyringe';
import { IUsuarioRepository } from "../interfaces/repositories/IUsuarioRepository"
import { Usuario } from "../models/Usuario"
import { PoolClient } from "pg";
import { QueryUsuario } from "../querys/QueryUsuario";
import { CriarUsuarioViewModel, AlterarUsuarioViewModel, DeletarUsuarioViewModel, BuscarUsuarioViewModel, AlterarSenhaUsuarioViewModel } from "../interfaces/viewmodels/UsuarioViewModel";

@injectable()
class UsuarioRepository implements IUsuarioRepository{

    private query:QueryUsuario

    constructor(
        @inject("Postgres")
        private database:IDatabase
    ){
        this.query = new QueryUsuario()
    }
    async alterarSenha(data: AlterarSenhaUsuarioViewModel, connection: PoolClient): Promise<void> {
        try{
            let values = [data.senha,
                          data.alteradopor,
                          data.id]
            let query = this.query.alterarSenha()
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
    async listar(connection: PoolClient): Promise<Usuario[]> {
        try{
            let values = []
            let query = this.query.listar()
            let result = await this.database.executeQuery({
                connection,
                values,
                query
            })
            const resultQuery: Usuario[] =  result.rows
            return resultQuery
        }
        catch(error){
            throw error
        }
    }
    async qtde(data: BuscarUsuarioViewModel, connection: PoolClient): Promise<number> {
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
    async buscar(data: BuscarUsuarioViewModel, connection: PoolClient): Promise<Usuario[]> {
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
            const resultQuery: Usuario[] =  result.rows
            return resultQuery
        }
        catch(error){
            throw error
        }
    }
    async procurarPorNome(nome: string, connection: PoolClient): Promise<Usuario> {
        try{
            let values = [nome]
            let query = this.query.procurarPorNome()
            let result = await this.database.executeQuery({
                connection,
                values,
                query
            })
            const resultQuery: Usuario =  result.rowCount>0?result.rows[0]:null
            return resultQuery
        }
        catch(error){
            throw error
        }
    }
    async procurarPorEmail(email: string, connection: PoolClient): Promise<Usuario> {
        try{
            let values = [email]
            let query = this.query.procurarPorEmail()
            let result = await this.database.executeQuery({
                connection,
                values,
                query
            })
            const resultQuery: Usuario =  result.rowCount>0?result.rows[0]:null
            return resultQuery
        }
        catch(error){
            throw error
        }
    }

    async criar(data: CriarUsuarioViewModel, connection: PoolClient): Promise<Usuario> {
        try{
            let values = [data.nome,
                          data.email,
                          data.datanascimento,
                          data.senha,
                          data.criadopor]
            let query = this.query.criar()
            let result = await this.database.executeQuery({
                connection,
                values,
                query
            })
            const resultQuery: Usuario = result.rows[0]
            return resultQuery
        }
        catch(error){
            throw error
        }
    }
    async alterar(data: AlterarUsuarioViewModel, connection: PoolClient): Promise<void> {
        try{
            let values = [data.nome,
                          data.email,
                          data.datanascimento,
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
    async deletar(data: DeletarUsuarioViewModel, connection: PoolClient): Promise<void> {
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
    async procurarPorId(id: number, connection: PoolClient): Promise<Usuario> {
        try{
            let values = [id]
            let query = this.query.procurarPorId()
            let result = await this.database.executeQuery({
                connection,
                values,
                query
            })
            const resultQuery: Usuario =  result.rowCount>0?result.rows[0]:null
            return resultQuery
        }
        catch(error){
            throw error
        }
    }

}

export { UsuarioRepository }