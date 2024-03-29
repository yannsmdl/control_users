import { inject, injectable } from "tsyringe";
import { IDatabase } from "../interfaces/database/IDatabase";
import { IServicoService } from "../interfaces/services/IServicoService";
import { CriarServicoViewModel, AlterarServicoViewModel, DeletarServicoViewModel, BuscarServicoViewModel, RetornoBuscaServicoViewModel } from "../interfaces/viewmodels/ServicoViewModel";
import { Servico } from "../models/Servico";
import { IAlterarServicoHandle } from "../interfaces/handlers/Servico/IAlterarServicoHandle";
import { ICriarServicoHandle } from "../interfaces/handlers/Servico/ICriarServicoHandle";
import { IDeletarServicoHandle } from "../interfaces/handlers/Servico/IDeletarServicoHandle";
// import { ILogAuditoriaService } from "../interfaces/services/ILogAuditoriaService";
// import { CriarLogAuditoriaViewModel } from "../interfaces/viewmodels/CriarLogAuditoriaViewModel";
import { IBuscarServicoHandle } from "../interfaces/handlers/Servico/IBuscarServicoHandle";
import { IListarServicoHandle } from "../interfaces/handlers/Servico/IListarServicoHandle";

@injectable()
class ServicoService implements IServicoService{
    constructor(
        @inject("Postgres")
        private database:IDatabase,
        @inject("CriarServicoHandle")
        private criarServicoHandle: ICriarServicoHandle,
        @inject("DeletarServicoHandle")
        private deletarServicoHandle: IDeletarServicoHandle,
        @inject("AlterarServicoHandle")
        private alterarServicoHandle: IAlterarServicoHandle,
        @inject("BuscarServicoHandle")
        private buscarServicoHandle: IBuscarServicoHandle,
        @inject("ListarServicoHandle")
        private listarServicoHandle: IListarServicoHandle
        // @inject("LogAuditoriaService")
        // private logAuditoriaService: ILogAuditoriaService
    ){}
    async listar(buscadopor:number): Promise<Servico[]> {
        const connection = await this.database.getConnection()
        try{
            await this.database.beginQuery(connection)
            const result = await this.listarServicoHandle.execute(connection);
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
    async buscar(data: BuscarServicoViewModel): Promise<RetornoBuscaServicoViewModel> {
        const connection = await this.database.getConnection()
        try{
            await this.database.beginQuery(connection)
            const result = await this.buscarServicoHandle.execute(data,connection);
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
    async criar(data: CriarServicoViewModel): Promise<Servico> {
        const connection = await this.database.getConnection()
        try{
            await this.database.beginQuery(connection)
            const result = await this.criarServicoHandle.execute(data,connection);
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
    async alterar(data: AlterarServicoViewModel): Promise<void> {
        const connection = await this.database.getConnection()
        try{
            await this.database.beginQuery(connection)
            await this.alterarServicoHandle.execute(data,connection);
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
    async deletar(data: DeletarServicoViewModel): Promise<void> {
        const connection = await this.database.getConnection()
        try{
            await this.database.beginQuery(connection)
            await this.deletarServicoHandle.execute(data,connection);
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

export { ServicoService }