import { Usuario } from "../../models/Usuario";

interface CriarUsuarioViewModel{
    nome: string;
    email: string;
    datanascimento: Date;
    senha:string;
    criadopor: number;
}

interface BuscarUsuarioViewModel{
    id: string;
    nome: string;
    offset: string;
    buscadopor: number;
}

interface RetornoBuscaUsuarioViewModel{
    total:number,
    data: Usuario[]
}

interface AlterarUsuarioViewModel{
    nome: string;
    email: string;
    datanascimento: Date;
    alteradopor: number;
    id: number;
}

interface AlterarSenhaUsuarioViewModel{
    senha: string;
    alteradopor: number;
    id: number;
}

interface DeletarUsuarioViewModel{
    deletadopor: number;
    id: number;
}

export { AlterarSenhaUsuarioViewModel , RetornoBuscaUsuarioViewModel , CriarUsuarioViewModel , BuscarUsuarioViewModel , AlterarUsuarioViewModel , DeletarUsuarioViewModel }
