import { Router } from "express";
import { AutenticacaoController } from "../controllers/AutenticacaoController";

const autenticacaoRoutes = Router()

const autenticacaoController = new AutenticacaoController()

autenticacaoRoutes.post("/login",autenticacaoController.AutenticacaoUsuarioController)

export { autenticacaoRoutes }