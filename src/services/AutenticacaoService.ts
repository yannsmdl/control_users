import { inject, injectable } from "tsyringe";
import { IResponseLoginDTO } from "../interfaces/dto/IResponseLoginDTO";
import { IAutenticacaoService } from "../interfaces/services/IAutenticacaoService";
import { IAutenticarUsuarioHandle } from "../interfaces/handlers/Autenticacao/IAutenticarUsuarioHandle";
import { LoginViewModel } from "../interfaces/viewmodels/LoginViewModel";
import { IDatabase } from "../interfaces/database/IDatabase";

@injectable()
class AutenticacaoService implements IAutenticacaoService{
    constructor(
        @inject("Postgres")
        private database:IDatabase,
        @inject("AutenticarUsuarioHandle")
        private autenticarUsuarioHandle: IAutenticarUsuarioHandle
    ){}

    async autenticarUsuario(data: LoginViewModel):Promise<IResponseLoginDTO>{
        const connection = await this.database.getConnection()
        try{
            await this.database.beginQuery(connection)
            const result = await this.autenticarUsuarioHandle.execute(data,connection);
            await this.database.commitQuery(connection)
            this.database.releaseConnection(connection)
            // const log: CriarLogAuditoriaViewModel = {
            //     idrota: 5,
            //     idusuario: result.id,
            //     parametrosrequisicao: null,
            //     parametrosresposta: JSON.stringify(result),
            //     sucesso:true
            // }
            // result.id=null
            // await this.logAuditoriaService.criar(log)
            return result;
        }
        catch(error){
            await this.database.rollbackQuery(connection)
            this.database.releaseConnection(connection)
            throw error
        }
    }

}

export { AutenticacaoService }