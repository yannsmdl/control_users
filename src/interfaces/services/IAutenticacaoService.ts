import { IResponseLoginDTO } from "../dto/IResponseLoginDTO";
import { LoginViewModel } from "../viewmodels/LoginViewModel";

interface IAutenticacaoService{
    autenticarUsuario(data: LoginViewModel):Promise<IResponseLoginDTO>;
}

export { IAutenticacaoService }