import { PoolClient } from "pg";
import { BuscarUsuarioViewModel, RetornoBuscaUsuarioViewModel } from "../../viewmodels/UsuarioViewModel";

interface IBuscarUsuarioHandle{
    execute(data: BuscarUsuarioViewModel, connection: PoolClient):Promise<RetornoBuscaUsuarioViewModel>;
}

export { IBuscarUsuarioHandle }