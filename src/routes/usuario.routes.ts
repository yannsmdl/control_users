import { Router } from "express";
import { UsuarioController } from "../controllers/UsuarioController";
import { Autenticacao } from "../auth/Autenticacao";

const usuarioRoutes = Router()

const usuarioController = new UsuarioController()
const autenticacao = new Autenticacao()

usuarioRoutes.get("/list",autenticacao.confirmarNivelPermissao("GET",11),usuarioController.ListarController)
usuarioRoutes.get("/",autenticacao.confirmarNivelPermissao("GET",10),usuarioController.BuscarController)
usuarioRoutes.post("/",autenticacao.confirmarNivelPermissao("POST",12),usuarioController.CriarController)
usuarioRoutes.put("/:id",autenticacao.confirmarNivelPermissao("PUT",13),usuarioController.AlterarController)
usuarioRoutes.put("/alterar-senha/:id",autenticacao.confirmarNivelPermissao("PUT",14),usuarioController.AlterarSenhaController)
usuarioRoutes.delete("/:id",autenticacao.confirmarNivelPermissao("DELETE",15),usuarioController.DeletarController)

export { usuarioRoutes }