import { PermissoesServicosUsuario } from "../../models/PermissoesServicosUsuario";
import { AlterarPermissoesServicosUsuarioViewModel, BuscarPermissoesServicosUsuarioViewModel, CriarPermissoesServicosUsuarioViewModel ,DeletarPermissoesServicosUsuarioViewModel, RetornoBuscaPermissoesServicosUsuarioViewModel } from "../viewmodels/PermissoesServicosUsuarioViewModel";

interface IPermissoesServicosUsuarioService{
    criar(data: CriarPermissoesServicosUsuarioViewModel[]):Promise<PermissoesServicosUsuario[]>;
    alterar(data:AlterarPermissoesServicosUsuarioViewModel):Promise<void>;
    deletar(data:DeletarPermissoesServicosUsuarioViewModel):Promise<void>;
    buscar(data:BuscarPermissoesServicosUsuarioViewModel):Promise<RetornoBuscaPermissoesServicosUsuarioViewModel>;
}

export { IPermissoesServicosUsuarioService }