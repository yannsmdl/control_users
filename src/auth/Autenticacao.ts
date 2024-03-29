import * as dotenv from 'dotenv'
dotenv.config()
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { Postgres } from '../databases/Postgres';
import { UsuarioRepository } from '../repositories/UsuarioRepository';
import { SessaoUsuarioRepository } from '../repositories/SessaoUsuarioRepository';
import { PermissoesServicosUsuarioRepository } from '../repositories/PermissoesServicosUsuarioRepository';

interface IPayload{
    sub:string;
}

class Autenticacao{
    constructor(
    ){} 

    async confirmarAutenticacao(req: Request, res: Response, next: NextFunction) {
        const postgres = new Postgres()
        const connection = await postgres.getConnection()
        try{
            await postgres.beginQuery(connection)
            const authHeader = req.headers.authorization

            if(!authHeader){
                throw new Error("Token não foi informado")
            }

            const [, token] = authHeader.split(" ")

            const { sub: id } = verify(token,process.env.SECRET_TOKEN) as IPayload

            const usuarioRepository = new UsuarioRepository(postgres)

            const permissoesRepository = new PermissoesServicosUsuarioRepository(postgres)

            const usuario = await usuarioRepository.procurarPorId(parseInt(id),connection)

            if(!usuario){
                throw new Error("Usuário informado para autenticação nao existe")
            }

            const permissoes_usuario = await permissoesRepository.procurarPorIdUsuario(usuario.id,connection)

            const sessaoUsuarioRepository = new SessaoUsuarioRepository(postgres)

            const sessao = await sessaoUsuarioRepository.procurarPorTokenAcesso(token,connection)
            if(sessao == null){
                throw new Error("A sessão não é mais valida, por favor, reautentique")
            }

            await sessaoUsuarioRepository.atualizar(sessao.id,connection)
            req.body.Usuario = usuario

            req.body.idsessao = sessao.id

            req.body.permissoes = permissoes_usuario

            await postgres.commitQuery(connection)
            postgres.releaseConnection(connection)
            next()
        }
        catch(error){
            await postgres.rollbackQuery(connection)
            postgres.releaseConnection(connection)
            return res.status(401).json({error:error.message})
        }
    }

    confirmarNivelPermissao(tipo_busca: string, idservico: number) {
        return function (req: Request, res: Response, next: NextFunction){
            try{
                let find: boolean = false
                for(let i in req.body.permissoes){
                    if (req.body.permissoes[i].idservico == idservico){
                        if(tipo_busca == 'GET' && req.body.permissoes[i].podeconsultar){
                            find = true
                            break;
                        }
                        else if(tipo_busca == 'POST' && req.body.permissoes[i].podeinserir){
                            find = true
                            break;
                        }
                        else if(tipo_busca == 'PUT' && req.body.permissoes[i].podealterar){
                            find = true
                            break;
                        }
                        else if(tipo_busca == 'DELETE' && req.body.permissoes[i].podedeletar){
                            find = true
                            break;
                        }
                    }
                }
                if (find){
                    next()
                }
                else{
                    throw new Error("Não possui acesso")
                }
            }
            catch(error){
                const message = {"error":"Você não possui permissão para acessar essa rota"}
                return res.status(401).json(message)
            }
        }
    }
}
export { Autenticacao }