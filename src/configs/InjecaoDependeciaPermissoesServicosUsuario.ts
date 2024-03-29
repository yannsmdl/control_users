import { container } from 'tsyringe'
import { IPermissoesServicosUsuarioRepository } from '../interfaces/repositories/IPermissoesServicosUsuarioRepository'
import { PermissoesServicosUsuarioRepository } from '../repositories/PermissoesServicosUsuarioRepository'
import { IAlterarPermissoesServicosUsuarioHandle } from '../interfaces/handlers/PermissoesServicosUsuario/IAlterarPermissoesServicosUsuarioHandle'
import { AlterarPermissoesServicosUsuarioHandle } from '../handlers/PermissoesServicosUsuario/AlterarPermissoesServicosUsuarioHandle'
import { CriarPermissoesServicosUsuarioHandle } from '../handlers/PermissoesServicosUsuario/CriarPermissoesServicosUsuarioHandle'
import { DeletarPermissoesServicosUsuarioHandle } from '../handlers/PermissoesServicosUsuario/DeletarPermissoesServicosUsuarioHandle'
import { IBuscarPermissoesServicosUsuarioHandle } from '../interfaces/handlers/PermissoesServicosUsuario/IBuscarPermissoesServicosUsuarioHandle'
import { ICriarPermissoesServicosUsuarioHandle } from '../interfaces/handlers/PermissoesServicosUsuario/ICriarPermissoesServicosUsuarioHandle'
import { IDeletarPermissoesServicosUsuarioHandle } from '../interfaces/handlers/PermissoesServicosUsuario/IDeletarPermissoesServicosUsuarioHandle'
import { BuscarPermissoesServicosUsuarioHandle } from '../handlers/PermissoesServicosUsuario/BuscarPermissoesServicosUsuarioHandle'

container.registerSingleton<IPermissoesServicosUsuarioRepository>("PermissoesServicosUsuarioRepository",PermissoesServicosUsuarioRepository)

container.registerSingleton<IAlterarPermissoesServicosUsuarioHandle>("AlterarPermissoesServicosUsuarioHandle",AlterarPermissoesServicosUsuarioHandle)
container.registerSingleton<IBuscarPermissoesServicosUsuarioHandle>("BuscarPermissoesServicosUsuarioHandle",BuscarPermissoesServicosUsuarioHandle)
container.registerSingleton<ICriarPermissoesServicosUsuarioHandle>("CriarPermissoesServicosUsuarioHandle",CriarPermissoesServicosUsuarioHandle)
container.registerSingleton<IDeletarPermissoesServicosUsuarioHandle>("DeletarPermissoesServicosUsuarioHandle",DeletarPermissoesServicosUsuarioHandle)
