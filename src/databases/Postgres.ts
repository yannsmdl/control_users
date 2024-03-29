import * as dotenv from 'dotenv'
dotenv.config()
import { PoolClient, QueryResult } from "pg";
import { Pool } from "pg";
import { IDatabase } from '../interfaces/database/IDatabase';
import { IRequestExecuteQueryDTO } from '../interfaces/database/IRequestExecuteQueryDTO';

class Postgres implements IDatabase{

    private pool:Pool

    constructor(){
        this.pool = new Pool({
            connectionString: process.env.CONSTRING_PG
        })
    }

    async beginQuery(connection: PoolClient): Promise<void> {
        await connection.query('BEGIN')
        return
    }

    async executeQuery({connection, query, values}:IRequestExecuteQueryDTO): Promise<QueryResult<any>> {
        return await connection.query(query, values)
    }
    
    async commitQuery(connection: PoolClient): Promise<void> {
        await connection.query('COMMIT')
        return
    }
    
    async rollbackQuery(connection: PoolClient): Promise<void> {
        await connection.query('ROLLBACK')
        return
    }

    async getConnection(): Promise<PoolClient> {
        return await this.pool.connect()
    }
    releaseConnection(connection: PoolClient): void {
        connection.release()
        return
    }
    
}

export { Postgres }
