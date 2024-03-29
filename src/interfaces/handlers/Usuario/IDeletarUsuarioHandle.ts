import { PoolClient } from "pg";
import { DeletarUsuarioViewModel } from "../../viewmodels/UsuarioViewModel";

interface IDeletarUsuarioHandle{
    execute(data: DeletarUsuarioViewModel, connection: PoolClient):Promise<void>;
}

export { IDeletarUsuarioHandle }