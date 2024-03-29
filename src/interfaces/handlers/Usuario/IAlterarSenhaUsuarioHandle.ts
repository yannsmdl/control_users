import { PoolClient } from "pg";
import { AlterarSenhaUsuarioViewModel } from "../../viewmodels/UsuarioViewModel";

interface IAlterarSenhaUsuarioHandle{
    execute(data: AlterarSenhaUsuarioViewModel, connection: PoolClient):Promise<void>;
}

export { IAlterarSenhaUsuarioHandle }