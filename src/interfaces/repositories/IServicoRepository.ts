
import { PoolClient } from "pg";
import { Servico } from "../../models/Servico";
import { CriarServicoViewModel, AlterarServicoViewModel, DeletarServicoViewModel, BuscarServicoViewModel } from "../viewmodels/ServicoViewModel";

interface IServicoRepository{
    procurarPorId(id:number, connection: PoolClient):Promise<Servico>;
    procurarPorNome(nome:string, connection: PoolClient):Promise<Servico>;
    procurarDuplicidade(caminho:string, metodo: string, connection: PoolClient):Promise<Servico>;
    criar(data:CriarServicoViewModel, connection: PoolClient):Promise<Servico>;
    alterar(data: AlterarServicoViewModel, connection: PoolClient):Promise<void>;
    deletar(data: DeletarServicoViewModel, connection: PoolClient):Promise<void>;
    buscar(data: BuscarServicoViewModel, connection: PoolClient):Promise<Servico[]>
    qtde(data: BuscarServicoViewModel, connection: PoolClient):Promise<number>
    listar(connection: PoolClient):Promise<Servico[]>
}

export { IServicoRepository }
