import { PoolClient } from "pg";
import { Usuario } from "../../../models/Usuario";

interface IListarUsuarioHandle{
    execute(connection: PoolClient):Promise<Usuario[]>;
}

export { IListarUsuarioHandle }