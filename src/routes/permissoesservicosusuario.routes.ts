import { Router } from "express";
import { PermissoesServicosUsuarioController } from "../controllers/PermissoesServicosUsuarioController";
import { Autenticacao } from "../auth/Autenticacao";

const permissoesServicosUsuarioRoutes = Router()

const permissoesServicosUsuarioController = new PermissoesServicosUsuarioController()
const autenticacao = new Autenticacao()

permissoesServicosUsuarioRoutes.get("/",autenticacao.confirmarNivelPermissao("GET",8),permissoesServicosUsuarioController.BuscarController)
permissoesServicosUsuarioRoutes.post("/",autenticacao.confirmarNivelPermissao("POST",6),permissoesServicosUsuarioController.CriarController)
permissoesServicosUsuarioRoutes.put("/:id",autenticacao.confirmarNivelPermissao("PUT",7),permissoesServicosUsuarioController.AlterarController)
permissoesServicosUsuarioRoutes.delete("/:id",autenticacao.confirmarNivelPermissao("DELETE",9),permissoesServicosUsuarioController.DeletarController)

export { permissoesServicosUsuarioRoutes }