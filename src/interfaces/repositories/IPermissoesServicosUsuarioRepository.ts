
import { PoolClient } from "pg";
import { PermissoesServicosUsuario } from "../../models/PermissoesServicosUsuario";
import { CriarPermissoesServicosUsuarioViewModel, AlterarPermissoesServicosUsuarioViewModel , DeletarPermissoesServicosUsuarioViewModel} from "../viewmodels/PermissoesServicosUsuarioViewModel";

interface IPermissoesServicosUsuarioRepository{
    procurarPorId(id:number, connection: PoolClient):Promise<PermissoesServicosUsuario>;
    procurarPorIdUsuario(id:number, connection: PoolClient):Promise<PermissoesServicosUsuario[]>;
    procurarPorIdUsuarioEIdServico(idusuario:number,idservico:number, connection: PoolClient):Promise<PermissoesServicosUsuario>;
    criar(data:CriarPermissoesServicosUsuarioViewModel, connection: PoolClient):Promise<PermissoesServicosUsuario>;
    alterar(data: AlterarPermissoesServicosUsuarioViewModel, connection: PoolClient):Promise<void>;
    deletar(data: DeletarPermissoesServicosUsuarioViewModel, connection: PoolClient):Promise<void>;
}

export { IPermissoesServicosUsuarioRepository }
