
class QueryUsuario{
    procurarPorId():string{
        return `select *
                  from usuario
                 where id = $1
                   and ativo = true`
    }
    procurarPorNome():string{
        return `select *
                  from usuario
                 where nome = $1
                   and ativo = true`
    }
    procurarPorEmail():string{
        return `select *
                  from usuario
                 where email = $1
                   and ativo = true`
    }
    alterar():string{
        return `update usuario
                   set nome = $1,
                       email = $2,
                       datanascimento = $3,
                       alteradoem = 'now',
                       alteradopor = $4
                 where id = $5`
    }
    alterarSenha():string{
        return `update usuario
                   set senha = $1
                       alteradoem = 'now',
                       alteradopor = $2
                 where id = $3`
    }
    deletar():string{
        return `update usuario
                   set ativo = false,
                       deletadoem = 'now',
                       deletadopor = $1
                 where id = $2`
    }
    criar():string{
        return `insert into usuario
                            (nome,
                             email,
                             datanascimento,
                             senha,
                             criadopor)
                     values ($1,
                             $2,
                             $3,
                             $4,
                             $5) returning *`
    }
    listar():string{
        return `select * 
                  from usuario a 
                 where ativo = true
                 order by nome`
    }
    buscar():string{
        return `select * 
                  from usuario a 
                 where (a.id=$1 or $1 is null)
                   and (a.nome ilike '%'||$2||'%' or $2 is null)
                   and ativo = true
                 order by id
                offset $3
                 limit 6`
    }
    qtde():string{
        return `select count(1) 
                  from usuario a 
                 where (a.id=$1 or $1 is null)
                   and (a.nome ilike '%'||$2||'%' or $2 is null)
                   and ativo = true`
    }
}

export { QueryUsuario }