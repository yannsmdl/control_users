import * as dotenv from 'dotenv'
dotenv.config()
import 'reflect-metadata'
import './configs/InjecaoDependencia'
import express from 'express'
import { router } from './routes';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express()

app.use(express.json());

app.use(cors())

app.use(router)

app.listen(process.env.LISTEN_PORT,()=>console.log("Servidor executando na porta ",process.env.LISTEN_PORT))