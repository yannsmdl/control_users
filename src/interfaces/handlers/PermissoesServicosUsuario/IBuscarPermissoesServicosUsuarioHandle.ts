import { PoolClient } from "pg";
import { BuscarPermissoesServicosUsuarioViewModel, RetornoBuscaPermissoesServicosUsuarioViewModel } from "../../viewmodels/PermissoesServicosUsuarioViewModel";

interface IBuscarPermissoesServicosUsuarioHandle{
    execute(data: BuscarPermissoesServicosUsuarioViewModel, connection: PoolClient):Promise<RetornoBuscaPermissoesServicosUsuarioViewModel>;
}

export { IBuscarPermissoesServicosUsuarioHandle }