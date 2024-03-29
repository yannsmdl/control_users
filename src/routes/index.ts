import { Router } from "express";
import { usuarioRoutes } from "./usuario.routes";
import { servicoRoutes } from "./servico.routes";
import { permissoesServicosUsuarioRoutes } from './permissoesservicosusuario.routes'
import { autenticacaoRoutes } from "./autenticacao.routes";
import { Autenticacao } from "../auth/Autenticacao";

const router = Router();

const autenticacao = new Autenticacao()
router.use("/autenticacao",autenticacaoRoutes)
router.use("/usuarios",autenticacao.confirmarAutenticacao,usuarioRoutes)
router.use("/permissoes-usuario",autenticacao.confirmarAutenticacao,permissoesServicosUsuarioRoutes)
router.use("/servicos",autenticacao.confirmarAutenticacao,servicoRoutes)

export { router }