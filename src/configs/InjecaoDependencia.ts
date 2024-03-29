import { container } from 'tsyringe'
import { IDatabase } from '../interfaces/database/IDatabase'
import { Postgres } from '../databases/Postgres'

///// Database
container.registerSingleton<IDatabase>("Postgres",Postgres)

import './InjecaoDependeciaUsuario'
import './InjecaoDependeciaServico'
import './InjecaoDependeciaSessaoEAutenticacao'
import './InjecaoDependeciaPermissoesServicosUsuario'
