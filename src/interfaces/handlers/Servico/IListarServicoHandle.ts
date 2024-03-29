import { PoolClient } from "pg";
import { Servico } from "../../../models/Servico";

interface IListarServicoHandle{
    execute(connection: PoolClient):Promise<Servico[]>;
}

export { IListarServicoHandle }