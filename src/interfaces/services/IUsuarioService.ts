import { Usuario } from "../../models/Usuario";
import { AlterarSenhaUsuarioViewModel, AlterarUsuarioViewModel, BuscarUsuarioViewModel, CriarUsuarioViewModel ,DeletarUsuarioViewModel, RetornoBuscaUsuarioViewModel } from "../viewmodels/UsuarioViewModel";

interface IUsuarioService{
    criar(data: CriarUsuarioViewModel):Promise<Usuario>;
    alterar(data:AlterarUsuarioViewModel):Promise<void>;
    alterarSenha(data:AlterarSenhaUsuarioViewModel):Promise<void>;
    deletar(data:DeletarUsuarioViewModel):Promise<void>;
    buscar(data:BuscarUsuarioViewModel):Promise<RetornoBuscaUsuarioViewModel>;
    listar(buscadopor:number):Promise<Usuario[]>;
}

export { IUsuarioService }