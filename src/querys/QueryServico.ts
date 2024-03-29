
class QueryServico{
    procurarPorId():string{
        return `select *
                  from servico
                 where id = $1
                   and ativo = true`
    }
    procurarPorNome():string{
        return `select *
                  from servico
                 where nome = $1
                   and ativo = true`
    }
    procurarDuplicidade():string{
        return `select *
                  from servico
                 where caminho = $1
                   and metodo = $2
                   and ativo = true`
    }
    alterar():string{
        return `update servico
                   set nome = $1,
                       caminho = $2,
                       metodo = $3,
                       alteradoem = 'now',
                       alteradopor = $4
                 where id = $5`
    }
    deletar():string{
        return `update servico
                   set ativo = false,
                       deletadoem = 'now',
                       deletadopor = $1
                 where id = $2`
    }
    criar():string{
        return `insert into servico
                            (nome,
                             caminho,
                             metodo,
                             criadopor)
                     values ($1,
                             $2,
                             $3,
                             $4) returning *`
    }
    listar():string{
        return `select * 
                  from servico a 
                 where ativo = true
                 order by nome`
    }
    buscar():string{
        return `select * 
                  from servico a 
                 where (a.id=$1 or $1 is null)
                   and (a.nome ilike '%'||$2||'%' or $2 is null)
                   and ativo = true
                 order by id
                offset $3
                 limit 6`
    }
    qtde():string{
        return `select count(1) 
                  from servico a 
                 where (a.id=$1 or $1 is null)
                   and (a.nome ilike '%'||$2||'%' or $2 is null)
                   and ativo = true`
    }
}

export { QueryServico }