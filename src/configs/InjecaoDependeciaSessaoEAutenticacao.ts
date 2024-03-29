import { container } from 'tsyringe'
import { ISessaoUsuarioRepository } from '../interfaces/repositories/ISessaoUsuarioRepository'
import { IAutenticacaoService } from '../interfaces/services/IAutenticacaoService'
import { SessaoUsuarioRepository } from '../repositories/SessaoUsuarioRepository'
import { AutenticacaoService } from '../services/AutenticacaoService'
import { IAutenticarUsuarioHandle } from '../interfaces/handlers/Autenticacao/IAutenticarUsuarioHandle'
import { AutenticarUsuarioHandle } from '../handlers/Autenticacao/AutenticarUsuarioHandle'


container.registerSingleton<ISessaoUsuarioRepository>("SessaoUsuarioRepository",SessaoUsuarioRepository)
container.registerSingleton<IAutenticacaoService>("AutenticacaoService",AutenticacaoService)
container.registerSingleton<IAutenticarUsuarioHandle>("AutenticarUsuarioHandle",AutenticarUsuarioHandle)
