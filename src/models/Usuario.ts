interface Usuario{
    id: number;
    nome: string;
    email: string;
    datanascimento: Date;
    senha:string;
    ativo: boolean;
    criadoem: Date;
    criadopor: number;
    alteradoem: Date;
    alteradopor: number;
    deletadoem: Date;
    deletadopor: number;
}

export { Usuario }
