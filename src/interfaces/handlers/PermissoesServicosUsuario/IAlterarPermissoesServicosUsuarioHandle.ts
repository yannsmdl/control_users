import { PoolClient } from "pg";
import { AlterarPermissoesServicosUsuarioViewModel } from "../../viewmodels/PermissoesServicosUsuarioViewModel";

interface IAlterarPermissoesServicosUsuarioHandle{
    execute(data: AlterarPermissoesServicosUsuarioViewModel, connection: PoolClient):Promise<void>;
}

export { IAlterarPermissoesServicosUsuarioHandle }