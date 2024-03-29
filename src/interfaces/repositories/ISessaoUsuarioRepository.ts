
import { PoolClient } from "pg";
import { SessaoUsuario } from "../../models/SessaoUsuario";

interface ISessaoUsuarioRepository{
    procurarPorIdUsuario(idusuario:number, connection: PoolClient):Promise<SessaoUsuario[]>;
    procurarPorTokenAcesso(tokenacesso:string, connection: PoolClient):Promise<SessaoUsuario>;
    criar(idusuario: number,tokenacesso:string, connection: PoolClient):Promise<SessaoUsuario>;
    atualizar(id: number, connection: PoolClient):Promise<void>;
    desativarSessoes(idusuario: number, connection: PoolClient):Promise<void>;
}

export { ISessaoUsuarioRepository }
