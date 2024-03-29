import { container } from 'tsyringe'
import { IUsuarioRepository } from '../interfaces/repositories/IUsuarioRepository'
import { UsuarioRepository } from '../repositories/UsuarioRepository'
import { IAlterarUsuarioHandle } from '../interfaces/handlers/Usuario/IAlterarUsuarioHandle'
import { AlterarUsuarioHandle } from '../handlers/Usuario/AlterarUsuarioHandle'
import { CriarUsuarioHandle } from '../handlers/Usuario/CriarUsuarioHandle'
import { DeletarUsuarioHandle } from '../handlers/Usuario/DeletarUsuarioHandle'
import { ListarUsuarioHandle } from '../handlers/Usuario/ListarUsuarioHandle'
import { IBuscarUsuarioHandle } from '../interfaces/handlers/Usuario/IBuscarUsuarioHandle'
import { ICriarUsuarioHandle } from '../interfaces/handlers/Usuario/ICriarUsuarioHandle'
import { IDeletarUsuarioHandle } from '../interfaces/handlers/Usuario/IDeletarUsuarioHandle'
import { IListarUsuarioHandle } from '../interfaces/handlers/Usuario/IListarUsuarioHandle'
import { BuscarUsuarioHandle } from '../handlers/Usuario/BuscarUsuarioHandle'
import { AlterarSenhaUsuarioHandle } from '../handlers/Usuario/AlterarSenhaUsuarioHandle'
import { IAlterarSenhaUsuarioHandle } from '../interfaces/handlers/Usuario/IAlterarSenhaUsuarioHandle'

container.registerSingleton<IUsuarioRepository>("UsuarioRepository",UsuarioRepository)

container.registerSingleton<IAlterarUsuarioHandle>("AlterarUsuarioHandle",AlterarUsuarioHandle)
container.registerSingleton<IBuscarUsuarioHandle>("BuscarUsuarioHandle",BuscarUsuarioHandle)
container.registerSingleton<ICriarUsuarioHandle>("CriarUsuarioHandle",CriarUsuarioHandle)
container.registerSingleton<IDeletarUsuarioHandle>("DeletarUsuarioHandle",DeletarUsuarioHandle)
container.registerSingleton<IListarUsuarioHandle>("ListarUsuarioHandle",ListarUsuarioHandle)
container.registerSingleton<IAlterarSenhaUsuarioHandle>("AlterarSenhaUsuarioHandle",AlterarSenhaUsuarioHandle)