import { container } from 'tsyringe'
import { Request , Response } from 'express'
import { PermissoesServicosUsuarioService } from '../services/PermissoesServicosUsuarioService'
import { IPermissoesServicosUsuarioService } from '../interfaces/services/IPermissoesServicosUsuarioService'
import { AlterarPermissoesServicosUsuarioViewModel, BuscarPermissoesServicosUsuarioViewModel, CriarPermissoesServicosUsuarioViewModel, DeletarPermissoesServicosUsuarioViewModel } from '../interfaces/viewmodels/PermissoesServicosUsuarioViewModel'

class PermissoesServicosUsuarioController{
    async BuscarController(req:Request, res:Response):Promise<Response>{
        try{
            const { idusuario , offset } = req.query
            const data: BuscarPermissoesServicosUsuarioViewModel = {
                idusuario: typeof idusuario === "string"?(idusuario != "null"?(idusuario != ""?idusuario:null):null):null,
                offset: typeof offset === "string"?(offset != "null"?(offset != ""?offset:null):null):null,
                buscadopor: req.body.Usuario.id
            }
            const servicoService = container.resolve<IPermissoesServicosUsuarioService>(PermissoesServicosUsuarioService)
            const response = await servicoService.buscar(data)
            return res.status(200).json(response)
        }
        catch(error){
            return res.status(400).json({error:error.message})
        }
    }
    async CriarController(req:Request, res:Response):Promise<Response>{
        try{
            const { list_permissions } = req.body
            const data: CriarPermissoesServicosUsuarioViewModel[] = list_permissions
            for (let i in data){
                data[i].criadopor = parseInt(req.body.Usuario.id)
            }
            const servicoService = container.resolve<IPermissoesServicosUsuarioService>(PermissoesServicosUsuarioService)
            const response = await servicoService.criar(data)

            return res.status(201).json(response)
        }
        catch(error){
            return res.status(400).json({error:error.message})
        }
    }

    async AlterarController(req:Request, res:Response):Promise<Response>{
        try{
            const { podeconsultar , podeinserir , podealterar , podedeletar } = req.body

            const { id } = req.params
            
            const data: AlterarPermissoesServicosUsuarioViewModel = {
                podeconsultar,
                podeinserir,
                podealterar,
                podedeletar,
                alteradopor: req.body.Usuario.id,
                id: parseInt(id)
            }
            const servicoService = container.resolve<IPermissoesServicosUsuarioService>(PermissoesServicosUsuarioService)
            const response = await servicoService.alterar(data)

            return res.status(200).json(response)
        }
        catch(error){
            return res.status(400).json({error:error.message})
        }
    }

    async DeletarController(req:Request, res:Response):Promise<Response>{
        try{
            const { id } = req.params
            
            const data: DeletarPermissoesServicosUsuarioViewModel = {
                id: parseInt(id),
                deletadopor: req.body.Usuario.id
            }
            const servicoService = container.resolve<IPermissoesServicosUsuarioService>(PermissoesServicosUsuarioService)
            const response = await servicoService.deletar(data)

            return res.status(200).json(response)
        }
        catch(error){
            return res.status(400).json({error:error.message})
        }
    }
}

export { PermissoesServicosUsuarioController }