import { PoolClient } from "pg";
import { PermissoesServicosUsuario } from "../../../models/PermissoesServicosUsuario";
import { CriarPermissoesServicosUsuarioViewModel } from "../../viewmodels/PermissoesServicosUsuarioViewModel";

interface ICriarPermissoesServicosUsuarioHandle{
    execute(data: CriarPermissoesServicosUsuarioViewModel[], connection: PoolClient):Promise<PermissoesServicosUsuario[]>;
}

export { ICriarPermissoesServicosUsuarioHandle }