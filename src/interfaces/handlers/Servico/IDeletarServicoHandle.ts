import { PoolClient } from "pg";
import { DeletarServicoViewModel } from "../../viewmodels/ServicoViewModel";

interface IDeletarServicoHandle{
    execute(data: DeletarServicoViewModel, connection: PoolClient):Promise<void>;
}

export { IDeletarServicoHandle }