import { inject, injectable } from "tsyringe";
import { IDatabase } from "../interfaces/database/IDatabase";
import { IPermissoesServicosUsuarioService } from "../interfaces/services/IPermissoesServicosUsuarioService";
import { CriarPermissoesServicosUsuarioViewModel, AlterarPermissoesServicosUsuarioViewModel, DeletarPermissoesServicosUsuarioViewModel, BuscarPermissoesServicosUsuarioViewModel, RetornoBuscaPermissoesServicosUsuarioViewModel } from "../interfaces/viewmodels/PermissoesServicosUsuarioViewModel";
import { PermissoesServicosUsuario } from "../models/PermissoesServicosUsuario";
import { IAlterarPermissoesServicosUsuarioHandle } from "../interfaces/handlers/PermissoesServicosUsuario/IAlterarPermissoesServicosUsuarioHandle";
import { ICriarPermissoesServicosUsuarioHandle } from "../interfaces/handlers/PermissoesServicosUsuario/ICriarPermissoesServicosUsuarioHandle";
import { IDeletarPermissoesServicosUsuarioHandle } from "../interfaces/handlers/PermissoesServicosUsuario/IDeletarPermissoesServicosUsuarioHandle";
// import { ILogAuditoriaService } from "../interfaces/services/ILogAuditoriaService";
// import { CriarLogAuditoriaViewModel } from "../interfaces/viewmodels/CriarLogAuditoriaViewModel";
import { IBuscarPermissoesServicosUsuarioHandle } from "../interfaces/handlers/PermissoesServicosUsuario/IBuscarPermissoesServicosUsuarioHandle";

@injectable()
class PermissoesServicosUsuarioService implements IPermissoesServicosUsuarioService{
    constructor(
        @inject("Postgres")
        private database:IDatabase,
        @inject("CriarPermissoesServicosUsuarioHandle")
        private criarPermissoesServicosUsuarioHandle: ICriarPermissoesServicosUsuarioHandle,
        @inject("DeletarPermissoesServicosUsuarioHandle")
        private deletarPermissoesServicosUsuarioHandle: IDeletarPermissoesServicosUsuarioHandle,
        @inject("AlterarPermissoesServicosUsuarioHandle")
        private alterarPermissoesServicosUsuarioHandle: IAlterarPermissoesServicosUsuarioHandle,
        @inject("BuscarPermissoesServicosUsuarioHandle")
        private buscarPermissoesServicosUsuarioHandle: IBuscarPermissoesServicosUsuarioHandle
        // @inject("LogAuditoriaService")
        // private logAuditoriaService: ILogAuditoriaService
    ){}
    async buscar(data: BuscarPermissoesServicosUsuarioViewModel): Promise<RetornoBuscaPermissoesServicosUsuarioViewModel> {
        const connection = await this.database.getConnection()
        try{
            await this.database.beginQuery(connection)
            const result = await this.buscarPermissoesServicosUsuarioHandle.execute(data,connection);
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
    async criar(data: CriarPermissoesServicosUsuarioViewModel[]): Promise<PermissoesServicosUsuario[]> {
        const connection = await this.database.getConnection()
        try{
            await this.database.beginQuery(connection)
            const result = await this.criarPermissoesServicosUsuarioHandle.execute(data,connection);
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
    async alterar(data: AlterarPermissoesServicosUsuarioViewModel): Promise<void> {
        const connection = await this.database.getConnection()
        try{
            await this.database.beginQuery(connection)
            await this.alterarPermissoesServicosUsuarioHandle.execute(data,connection);
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
    async deletar(data: DeletarPermissoesServicosUsuarioViewModel): Promise<void> {
        const connection = await this.database.getConnection()
        try{
            await this.database.beginQuery(connection)
            await this.deletarPermissoesServicosUsuarioHandle.execute(data,connection);
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

export { PermissoesServicosUsuarioService }