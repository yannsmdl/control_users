import { PoolClient, QueryResult } from "pg";
import { IRequestExecuteQueryDTO } from "./IRequestExecuteQueryDTO";

interface IDatabase{
    getConnection():Promise<PoolClient>;
    releaseConnection(connection:PoolClient):void;
    beginQuery(connection:PoolClient):Promise<void>;
    executeQuery(data:IRequestExecuteQueryDTO):Promise<QueryResult>;
    commitQuery(connection:PoolClient):Promise<void>;
    rollbackQuery(connection:PoolClient):Promise<void>;
}

export { IDatabase }
