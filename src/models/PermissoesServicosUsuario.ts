interface PermissoesServicosUsuario{
    id: number;
    idusuario:number;
    idservico:number;
    podeconsultar:boolean;
    podeinserir:boolean;
    podealterar:boolean;
    podedeletar:boolean;
    ativo: boolean;
    criadoem: Date;
    criadopor: number;
    alteradoem: Date;
    alteradopor: number;
    deletadoem: Date;
    deletadopor: number;
}

export { PermissoesServicosUsuario }
