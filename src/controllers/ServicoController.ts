import { container } from 'tsyringe'
import { Request , Response } from 'express'
import { ServicoService } from '../services/ServicoService'
import { IServicoService } from '../interfaces/services/IServicoService'
import { AlterarServicoViewModel, BuscarServicoViewModel, CriarServicoViewModel, DeletarServicoViewModel } from '../interfaces/viewmodels/ServicoViewModel'

class ServicoController{
    async ListarController(req:Request, res:Response):Promise<Response>{
        try{
            const servicoService = container.resolve<IServicoService>(ServicoService)
            const response = await servicoService.listar(req.body.Usuario.id)
            return res.status(200).json(response)
        }
        catch(error){
            return res.status(400).json({error:error.message})
        }
    }
    async BuscarController(req:Request, res:Response):Promise<Response>{
        try{
            const { id , nome , offset } = req.query
            const data: BuscarServicoViewModel = {
                id: typeof id === "string"?(id != "null"?(id != ""?id:null):null):null,
                nome: typeof nome === "string"?(nome != "null"?(nome != ""?nome:null):null):null,
                offset: typeof offset === "string"?(offset != "null"?(offset != ""?offset:null):null):null,
                buscadopor: req.body.Usuario.id
            }
            const servicoService = container.resolve<IServicoService>(ServicoService)
            const response = await servicoService.buscar(data)
            return res.status(200).json(response)
        }
        catch(error){
            return res.status(400).json({error:error.message})
        }
    }
    async CriarController(req:Request, res:Response):Promise<Response>{
        try{
            const { nome , caminho , metodo } = req.body
            
            const data: CriarServicoViewModel = {
                nome,
                caminho,
                metodo,
                criadopor: req.body.Usuario.id
            }
            const servicoService = container.resolve<IServicoService>(ServicoService)
            const response = await servicoService.criar(data)

            return res.status(201).json(response)
        }
        catch(error){
            return res.status(400).json({error:error.message})
        }
    }

    async AlterarController(req:Request, res:Response):Promise<Response>{
        try{
            const { nome , caminho , metodo } = req.body

            const { id } = req.params
            
            const data: AlterarServicoViewModel = {
                nome,
                caminho,
                metodo,
                alteradopor: req.body.Usuario.id,
                id: parseInt(id)
            }
            const servicoService = container.resolve<IServicoService>(ServicoService)
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
            
            const data: DeletarServicoViewModel = {
                id: parseInt(id),
                deletadopor: req.body.Usuario.id
            }
            const servicoService = container.resolve<IServicoService>(ServicoService)
            const response = await servicoService.deletar(data)

            return res.status(200).json(response)
        }
        catch(error){
            return res.status(400).json({error:error.message})
        }
    }
}

export { ServicoController }