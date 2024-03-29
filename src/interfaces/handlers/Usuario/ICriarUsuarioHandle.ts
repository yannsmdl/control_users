import { PoolClient } from "pg";
import { Usuario } from "../../../models/Usuario";
import { CriarUsuarioViewModel } from "../../viewmodels/UsuarioViewModel";

interface ICriarUsuarioHandle{
    execute(data: CriarUsuarioViewModel, connection: PoolClient):Promise<Usuario>;
}

export { ICriarUsuarioHandle }