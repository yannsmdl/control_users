import { PoolClient } from "pg";
import { AlterarServicoViewModel } from "../../viewmodels/ServicoViewModel";

interface IAlterarServicoHandle{
    execute(data: AlterarServicoViewModel, connection: PoolClient):Promise<void>;
}

export { IAlterarServicoHandle }