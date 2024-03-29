import { inject, injectable } from "tsyringe";
import { IDatabase } from "../interfaces/database/IDatabase";
import { IUsuarioService } from "../interfaces/services/IUsuarioService";
import { CriarUsuarioViewModel, AlterarUsuarioViewModel, DeletarUsuarioViewModel, BuscarUsuarioViewModel, RetornoBuscaUsuarioViewModel, AlterarSenhaUsuarioViewModel } from "../interfaces/viewmodels/UsuarioViewModel";
import { Usuario } from "../models/Usuario";
import { IAlterarUsuarioHandle } from "../interfaces/handlers/Usuario/IAlterarUsuarioHandle";
import { ICriarUsuarioHandle } from "../interfaces/handlers/Usuario/ICriarUsuarioHandle";
import { IDeletarUsuarioHandle } from "../interfaces/handlers/Usuario/IDeletarUsuarioHandle";
// import { ILogAuditoriaService } from "../interfaces/services/ILogAuditoriaService";
// import { CriarLogAuditoriaViewModel } from "../interfaces/viewmodels/CriarLogAuditoriaViewModel";
import { IBuscarUsuarioHandle } from "../interfaces/handlers/Usuario/IBuscarUsuarioHandle";
import { IListarUsuarioHandle } from "../interfaces/handlers/Usuario/IListarUsuarioHandle";
import { IAlterarSenhaUsuarioHandle } from "../interfaces/handlers/Usuario/IAlterarSenhaUsuarioHandle";

@injectable()
class UsuarioService implements IUsuarioService{
    constructor(
        @inject("Postgres")
        private database:IDatabase,
        @inject("CriarUsuarioHandle")
        private criarUsuarioHandle: ICriarUsuarioHandle,
        @inject("DeletarUsuarioHandle")
        private deletarUsuarioHandle: IDeletarUsuarioHandle,
        @inject("AlterarUsuarioHandle")
        private alterarUsuarioHandle: IAlterarUsuarioHandle,
        @inject("AlterarSenhaUsuarioHandle")
        private alterarSenhaUsuarioHandle: IAlterarSenhaUsuarioHandle,
        @inject("BuscarUsuarioHandle")
        private buscarUsuarioHandle: IBuscarUsuarioHandle,
        @inject("ListarUsuarioHandle")
        private listarUsuarioHandle: IListarUsuarioHandle
        // @inject("LogAuditoriaService")
        // private logAuditoriaService: ILogAuditoriaService
    ){}
    async alterarSenha(data: AlterarSenhaUsuarioViewModel): Promise<void> {
        const connection = await this.database.getConnection()
        try{
            await this.database.beginQuery(connection)
            await this.alterarSenhaUsuarioHandle.execute(data,connection);
            await this.database.commitQuery(connection)
            this.database.releaseConnection(connection)
            // const log: CriarLogAuditoriaViewModel = {
            //     idrota: 23,
            //     idusuario: data.alteradopor,
            //     parametrosrequisicao: JSON.stringify(data),
            //     parametrosresposta: null,
            //     sucesso:true
            // }
            // await this.logAuditoriaService.criar(log)
            return;
        }
        catch(error){
            await this.database.rollbackQuery(connection)
            this.database.releaseConnection(connection)
            // const log: CriarLogAuditoriaViewModel = {
            //     idrota: 23,
            //     idusuario: data.alteradopor,
            //     parametrosrequisicao: JSON.stringify(data),
            //     parametrosresposta: JSON.stringify(error.message),
            //     sucesso:false
            // }
            // await this.logAuditoriaService.criar(log)
            throw error
        }
    }
    async listar(buscadopor:number): Promise<Usuario[]> {
        const connection = await this.database.getConnection()
        try{
            await this.database.beginQuery(connection)
            const result = await this.listarUsuarioHandle.execute(connection);
            await this.database.commitQuery(connection)
            this.database.releaseConnection(connection)
            // const log: CriarLogAuditoriaViewModel = {
            //     idrota: 38,
            //     idusuario: buscadopor,
            //     parametrosrequisicao: null,
            //     parametrosresposta: JSON.stringify(result),
            //     sucesso:true
            // }
            // await this.logAuditoriaService.criar(log)
            return result;
        }
        catch(error){
            await this.database.rollbackQuery(connection)
            this.database.releaseConnection(connection)
            // const log: CriarLogAuditoriaViewModel = {
            //     idrota: 38,
            //     idusuario: buscadopor,
            //     parametrosrequisicao: null,
            //     parametrosresposta: JSON.stringify(error.message),
            //     sucesso:false
            // }
            // await this.logAuditoriaService.criar(log)
            throw error
        }
    }
    async buscar(data: BuscarUsuarioViewModel): Promise<RetornoBuscaUsuarioViewModel> {
        const connection = await this.database.getConnection()
        try{
            await this.database.beginQuery(connection)
            const result = await this.buscarUsuarioHandle.execute(data,connection);
            await this.database.commitQuery(connection)
            this.database.releaseConnection(connection)
            // const log: CriarLogAuditoriaViewModel = {
            //     idrota: 37,
            //     idusuario: data.buscadopor,
            //     parametrosrequisicao: JSON.stringify(data),
            //     parametrosresposta: JSON.stringify(result),
            //     sucesso:true
            // }
            // await this.logAuditoriaService.criar(log)
            return result;
        }
        catch(error){
            await this.database.rollbackQuery(connection)
            this.database.releaseConnection(connection)
            // const log: CriarLogAuditoriaViewModel = {
            //     idrota: 37,
            //     idusuario: data.buscadopor,
            //     parametrosrequisicao: JSON.stringify(data),
            //     parametrosresposta: JSON.stringify(error.message),
            //     sucesso:false
            // }
            // await this.logAuditoriaService.criar(log)
            throw error
        }
    }
    async criar(data: CriarUsuarioViewModel): Promise<Usuario> {
        const connection = await this.database.getConnection()
        try{
            await this.database.beginQuery(connection)
            const result = await this.criarUsuarioHandle.execute(data,connection);
            await this.database.commitQuery(connection)
            this.database.releaseConnection(connection)
            // const log: CriarLogAuditoriaViewModel = {
            //     idrota: 22,
            //     idusuario: data.criadopor,
            //     parametrosrequisicao: JSON.stringify(data),
            //     parametrosresposta: JSON.stringify(result),
            //     sucesso:true
            // }
            // await this.logAuditoriaService.criar(log)
            return result;
        }
        catch(error){
            await this.database.rollbackQuery(connection)
            this.database.releaseConnection(connection)
            // const log: CriarLogAuditoriaViewModel = {
            //     idrota: 22,
            //     idusuario: data.criadopor,
            //     parametrosrequisicao: JSON.stringify(data),
            //     parametrosresposta: JSON.stringify(error.message),
            //     sucesso:false
            // }
            // await this.logAuditoriaService.criar(log)
            throw error
        }
    }
    async alterar(data: AlterarUsuarioViewModel): Promise<void> {
        const connection = await this.database.getConnection()
        try{
            await this.database.beginQuery(connection)
            await this.alterarUsuarioHandle.execute(data,connection);
            await this.database.commitQuery(connection)
            this.database.releaseConnection(connection)
            // const log: CriarLogAuditoriaViewModel = {
            //     idrota: 23,
            //     idusuario: data.alteradopor,
            //     parametrosrequisicao: JSON.stringify(data),
            //     parametrosresposta: null,
            //     sucesso:true
            // }
            // await this.logAuditoriaService.criar(log)
            return;
        }
        catch(error){
            await this.database.rollbackQuery(connection)
            this.database.releaseConnection(connection)
            // const log: CriarLogAuditoriaViewModel = {
            //     idrota: 23,
            //     idusuario: data.alteradopor,
            //     parametrosrequisicao: JSON.stringify(data),
            //     parametrosresposta: JSON.stringify(error.message),
            //     sucesso:false
            // }
            // await this.logAuditoriaService.criar(log)
            throw error
        }
    }
    async deletar(data: DeletarUsuarioViewModel): Promise<void> {
        const connection = await this.database.getConnection()
        try{
            await this.database.beginQuery(connection)
            await this.deletarUsuarioHandle.execute(data,connection);
            await this.database.commitQuery(connection)
            this.database.releaseConnection(connection)
            // const log: CriarLogAuditoriaViewModel = {
            //     idrota: 24,
            //     idusuario: data.deletadopor,
            //     parametrosrequisicao: JSON.stringify(data),
            //     parametrosresposta: null,
            //     sucesso:true
            // }
            // await this.logAuditoriaService.criar(log)
            return;
        }
        catch(error){
            await this.database.rollbackQuery(connection)
            this.database.releaseConnection(connection)
            // const log: CriarLogAuditoriaViewModel = {
            //     idrota: 24,
            //     idusuario: data.deletadopor,
            //     parametrosrequisicao: JSON.stringify(data),
            //     parametrosresposta: JSON.stringify(error.message),
            //     sucesso:false
            // }
            // await this.logAuditoriaService.criar(log)
            throw error
        }
    }
}

export { UsuarioService }