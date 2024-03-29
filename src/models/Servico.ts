interface Servico{
    id: number;
    nome: string;
    caminho: string
    metodo: string;
    ativo: boolean;
    criadoem: Date;
    criadopor: number;
    alteradoem: Date;
    alteradopor: number;
    deletadoem: Date;
    deletadopor: number;
}

export { Servico }
