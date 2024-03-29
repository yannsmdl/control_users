import { container } from 'tsyringe'
import { Request , Response } from 'express'
import { AutenticacaoService } from '../services/AutenticacaoService'
import { IAutenticacaoService } from '../interfaces/services/IAutenticacaoService'
import { LoginViewModel } from '../interfaces/viewmodels/LoginViewModel'

class AutenticacaoController{
    async AutenticacaoUsuarioController(req:Request, res:Response):Promise<Response>{
        try{
            const { email , senha  } = req.body
            
            const loginViewModel: LoginViewModel = {
                email,
                senha
            }
            const autenticacaoService = container.resolve<IAutenticacaoService>(AutenticacaoService)
            const responseToken = await autenticacaoService.autenticarUsuario(loginViewModel)

            return res.status(200).json(responseToken)
        }
        catch(error){
            return res.status(400).json({error:error.message})
        }
    }
}

export { AutenticacaoController }