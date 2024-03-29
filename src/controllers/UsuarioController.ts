import { container } from 'tsyringe'
import { Request , Response } from 'express'
import { UsuarioService } from '../services/UsuarioService'
import { IUsuarioService } from '../interfaces/services/IUsuarioService'
import { AlterarSenhaUsuarioViewModel, AlterarUsuarioViewModel, BuscarUsuarioViewModel, CriarUsuarioViewModel, DeletarUsuarioViewModel } from '../interfaces/viewmodels/UsuarioViewModel'

class UsuarioController{
    async ListarController(req:Request, res:Response):Promise<Response>{
        try{
            const usuarioService = container.resolve<IUsuarioService>(UsuarioService)
            const response = await usuarioService.listar(1)
            return res.status(200).json(response)
        }
        catch(error){
            return res.status(400).json({error:error.message})
        }
    }
    async BuscarController(req:Request, res:Response):Promise<Response>{
        try{
            const { id , nome , offset } = req.query
            const data: BuscarUsuarioViewModel = {
                id: typeof id === "string"?(id != "null"?(id != ""?id:null):null):null,
                nome: typeof nome === "string"?(nome != "null"?(nome != ""?nome:null):null):null,
                offset: typeof offset === "string"?(offset != "null"?(offset != ""?offset:null):null):null,
                buscadopor: req.body.Usuario.id
            }
            const usuarioService = container.resolve<IUsuarioService>(UsuarioService)
            const response = await usuarioService.buscar(data)
            return res.status(200).json(response)
        }
        catch(error){
            return res.status(400).json({error:error.message})
        }
    }
    async CriarController(req:Request, res:Response):Promise<Response>{
        try{
            const { nome , email, datanascimento, senha } = req.body
            
            const data: CriarUsuarioViewModel = {
                nome,
                email,
                datanascimento,
                senha,
                criadopor: req.body.Usuario.id
            }
            const usuarioService = container.resolve<IUsuarioService>(UsuarioService)
            const response = await usuarioService.criar(data)

            return res.status(201).json(response)
        }
        catch(error){
            return res.status(400).json({error:error.message})
        }
    }

    async AlterarSenhaController(req:Request, res:Response):Promise<Response>{
        try{
            const { senha } = req.body

            const { id } = req.params
            
            const data: AlterarSenhaUsuarioViewModel = {
                senha,
                alteradopor: req.body.Usuario.id,
                id: parseInt(id)
            }
            const usuarioService = container.resolve<IUsuarioService>(UsuarioService)
            const response = await usuarioService.alterarSenha(data)

            return res.status(200).json(response)
        }
        catch(error){
            return res.status(400).json({error:error.message})
        }
    }

    async AlterarController(req:Request, res:Response):Promise<Response>{
        try{
            const { nome , email, datanascimento } = req.body

            const { id } = req.params
            
            const data: AlterarUsuarioViewModel = {
                nome,
                email,
                datanascimento,
                alteradopor: req.body.Usuario.id,
                id: parseInt(id)
            }
            const usuarioService = container.resolve<IUsuarioService>(UsuarioService)
            const response = await usuarioService.alterar(data)

            return res.status(200).json(response)
        }
        catch(error){
            return res.status(400).json({error:error.message})
        }
    }

    async DeletarController(req:Request, res:Response):Promise<Response>{
        try{
            const { id } = req.params
            
            const data: DeletarUsuarioViewModel = {
                id: parseInt(id),
                deletadopor: req.body.Usuario.id
            }
            const usuarioService = container.resolve<IUsuarioService>(UsuarioService)
            const response = await usuarioService.deletar(data)

            return res.status(200).json(response)
        }
        catch(error){
            return res.status(400).json({error:error.message})
        }
    }
}

export { UsuarioController }