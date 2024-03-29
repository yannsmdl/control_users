import { PoolClient } from "pg";
import { IResponseLoginDTO } from "../../dto/IResponseLoginDTO";
import { LoginViewModel } from "../../viewmodels/LoginViewModel";

interface IAutenticarUsuarioHandle{
    execute(data: LoginViewModel, connection: PoolClient):Promise<IResponseLoginDTO>;
}

export { IAutenticarUsuarioHandle }