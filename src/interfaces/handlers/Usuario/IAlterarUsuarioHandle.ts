import { PoolClient } from "pg";
import { AlterarUsuarioViewModel } from "../../viewmodels/UsuarioViewModel";

interface IAlterarUsuarioHandle{
    execute(data: AlterarUsuarioViewModel, connection: PoolClient):Promise<void>;
}

export { IAlterarUsuarioHandle }