import { PoolClient } from "pg";
import { DeletarPermissoesServicosUsuarioViewModel } from "../../viewmodels/PermissoesServicosUsuarioViewModel";

interface IDeletarPermissoesServicosUsuarioHandle{
    execute(data: DeletarPermissoesServicosUsuarioViewModel, connection: PoolClient):Promise<void>;
}

export { IDeletarPermissoesServicosUsuarioHandle }