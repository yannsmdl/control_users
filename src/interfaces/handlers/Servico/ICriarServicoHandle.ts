import { PoolClient } from "pg";
import { Servico } from "../../../models/Servico";
import { CriarServicoViewModel } from "../../viewmodels/ServicoViewModel";

interface ICriarServicoHandle{
    execute(data: CriarServicoViewModel, connection: PoolClient):Promise<Servico>;
}

export { ICriarServicoHandle }