interface SessaoUsuario{
    id: number;
    idusuario: number;
    tokenacesso: string;
    tokenrecuperacao: string;
    desativado: boolean;
    expiraem: Date;
    criadoem: Date;
}

export { SessaoUsuario }
