import { Router } from "express";
import { ServicoController } from "../controllers/ServicoController";
import { Autenticacao } from "../auth/Autenticacao";

const servicoRoutes = Router()

const servicoController = new ServicoController()
const autenticacao = new Autenticacao()

servicoRoutes.get("/list",autenticacao.confirmarNivelPermissao("GET",1), servicoController.ListarController)
servicoRoutes.get("/",autenticacao.confirmarNivelPermissao("GET",2),servicoController.BuscarController)
servicoRoutes.post("/",autenticacao.confirmarNivelPermissao("POST",3),servicoController.CriarController)
servicoRoutes.put("/:id",autenticacao.confirmarNivelPermissao("PUT",4),servicoController.AlterarController)
servicoRoutes.delete("/:id",autenticacao.confirmarNivelPermissao("DELETE",5),servicoController.DeletarController)

export { servicoRoutes }