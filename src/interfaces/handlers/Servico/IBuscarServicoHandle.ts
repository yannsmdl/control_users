import { PoolClient } from "pg";
import { BuscarServicoViewModel, RetornoBuscaServicoViewModel } from "../../viewmodels/ServicoViewModel";

interface IBuscarServicoHandle{
    execute(data: BuscarServicoViewModel, connection: PoolClient):Promise<RetornoBuscaServicoViewModel>;
}

export { IBuscarServicoHandle }