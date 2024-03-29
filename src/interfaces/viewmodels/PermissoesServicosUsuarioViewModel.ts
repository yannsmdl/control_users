import { PermissoesServicosUsuario } from "../../models/PermissoesServicosUsuario";

interface CriarPermissoesServicosUsuarioViewModel{
    idusuario:number;
    idservico:number;
    podeconsultar:boolean;
    podeinserir:boolean;
    podealterar:boolean;
    podedeletar:boolean;
    criadopor: number;
}

interface BuscarPermissoesServicosUsuarioViewModel{
    idusuario: string;
    offset: string;
    buscadopor: number;
}

interface RetornoBuscaPermissoesServicosUsuarioViewModel{
    total:number,
    data: PermissoesServicosUsuario[]
}

interface AlterarPermissoesServicosUsuarioViewModel{
    podeconsultar:boolean;
    podeinserir:boolean;
    podealterar:boolean;
    podedeletar:boolean;
    alteradopor: number;
    id: number;
}

interface DeletarPermissoesServicosUsuarioViewModel{
    deletadopor: number;
    id: number;
}



export { DeletarPermissoesServicosUsuarioViewModel, RetornoBuscaPermissoesServicosUsuarioViewModel , CriarPermissoesServicosUsuarioViewModel , BuscarPermissoesServicosUsuarioViewModel , AlterarPermissoesServicosUsuarioViewModel }
