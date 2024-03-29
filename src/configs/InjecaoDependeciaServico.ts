import { container } from 'tsyringe'
import { IServicoRepository } from '../interfaces/repositories/IServicoRepository'
import { ServicoRepository } from '../repositories/ServicoRepository'
import { IAlterarServicoHandle } from '../interfaces/handlers/Servico/IAlterarServicoHandle'
import { AlterarServicoHandle } from '../handlers/Servico/AlterarServicoHandle'
import { CriarServicoHandle } from '../handlers/Servico/CriarServicoHandle'
import { DeletarServicoHandle } from '../handlers/Servico/DeletarServicoHandle'
import { ListarServicoHandle } from '../handlers/Servico/ListarServicoHandle'
import { IBuscarServicoHandle } from '../interfaces/handlers/Servico/IBuscarServicoHandle'
import { ICriarServicoHandle } from '../interfaces/handlers/Servico/ICriarServicoHandle'
import { IDeletarServicoHandle } from '../interfaces/handlers/Servico/IDeletarServicoHandle'
import { IListarServicoHandle } from '../interfaces/handlers/Servico/IListarServicoHandle'
import { BuscarServicoHandle } from '../handlers/Servico/BuscarServicoHandle'

container.registerSingleton<IServicoRepository>("ServicoRepository",ServicoRepository)

container.registerSingleton<IAlterarServicoHandle>("AlterarServicoHandle",AlterarServicoHandle)
container.registerSingleton<IBuscarServicoHandle>("BuscarServicoHandle",BuscarServicoHandle)
container.registerSingleton<ICriarServicoHandle>("CriarServicoHandle",CriarServicoHandle)
container.registerSingleton<IDeletarServicoHandle>("DeletarServicoHandle",DeletarServicoHandle)
container.registerSingleton<IListarServicoHandle>("ListarServicoHandle",ListarServicoHandle)
