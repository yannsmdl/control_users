
import { PoolClient } from "pg";
import { Usuario } from "../../models/Usuario";
import { CriarUsuarioViewModel, AlterarUsuarioViewModel, DeletarUsuarioViewModel, BuscarUsuarioViewModel, AlterarSenhaUsuarioViewModel } from "../viewmodels/UsuarioViewModel";

interface IUsuarioRepository{
    procurarPorId(id:number, connection: PoolClient):Promise<Usuario>;
    procurarPorNome(nome:string, connection: PoolClient):Promise<Usuario>;
    procurarPorEmail(email:string, connection: PoolClient):Promise<Usuario>;
    criar(data:CriarUsuarioViewModel, connection: PoolClient):Promise<Usuario>;
    alterar(data: AlterarUsuarioViewModel, connection: PoolClient):Promise<void>;
    alterarSenha(data: AlterarSenhaUsuarioViewModel, connection: PoolClient):Promise<void>;
    deletar(data: DeletarUsuarioViewModel, connection: PoolClient):Promise<void>;
    buscar(data: BuscarUsuarioViewModel, connection: PoolClient):Promise<Usuario[]>
    qtde(data: BuscarUsuarioViewModel, connection: PoolClient):Promise<number>
    listar(connection: PoolClient):Promise<Usuario[]>
}

export { IUsuarioRepository }
