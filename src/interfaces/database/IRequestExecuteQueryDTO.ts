import { PoolClient } from "pg";

interface IRequestExecuteQueryDTO{
    connection: PoolClient;
    query: string;
    values:any[];
}
export { IRequestExecuteQueryDTO }
