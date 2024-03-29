import { Servico } from "../../models/Servico";
import { AlterarServicoViewModel, BuscarServicoViewModel, CriarServicoViewModel ,DeletarServicoViewModel, RetornoBuscaServicoViewModel } from "../viewmodels/ServicoViewModel";

interface IServicoService{
    criar(data: CriarServicoViewModel):Promise<Servico>;
    alterar(data:AlterarServicoViewModel):Promise<void>;
    deletar(data:DeletarServicoViewModel):Promise<void>;
    buscar(data:BuscarServicoViewModel):Promise<RetornoBuscaServicoViewModel>;
    listar(buscadopor:number):Promise<Servico[]>;
}

export { IServicoService }