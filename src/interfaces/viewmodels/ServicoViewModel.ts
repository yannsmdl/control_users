import { Servico } from "../../models/Servico";

interface CriarServicoViewModel{
    nome: string;
    caminho: string;
    metodo: string;
    criadopor: number;
}

interface BuscarServicoViewModel{
    id: string;
    nome: string;
    offset: string;
    buscadopor: number;
}

interface RetornoBuscaServicoViewModel{
    total:number,
    data: Servico[]
}

interface AlterarServicoViewModel{
    nome: string;
    caminho: string;
    metodo: string;
    alteradopor: number;
    id: number;
}


interface DeletarServicoViewModel{
    deletadopor: number;
    id: number;
}

export { RetornoBuscaServicoViewModel , CriarServicoViewModel , BuscarServicoViewModel , AlterarServicoViewModel , DeletarServicoViewModel }
