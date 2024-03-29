
class QuerySessaoUsuario{
    procurarPorIdUsuario():string{
        return `select *
                  from sessaousuario
                 where idusuario = $1
                   and desativado = false
                   and expiraem > now()`
    }
    procurarPorTokenAcesso():string{
        return `select *
                  from sessaousuario
                 where tokenacesso = $1
                   and desativado = false
                   and expiraem > now()`
    }
    desativarSessoes():string{
        return `update sessaousuario
                   set desativado = true
                 where idusuario = $1
                   and desativado = false`
    }
    atualizar():string{
        return `update sessaousuario
                  set expiraem = now() + INTERVAL '1 hours'
                where id = $1`
    }
    criar():string{
        return `insert into sessaousuario
                            (idusuario,
                             tokenacesso,
                             tokenrecuperacao,
                             desativado,
                             expiraem)
                     values ($1,
                             $2,
                             $2,
                             false,
                             now() + INTERVAL '1 hours') returning *`
    }
}

export { QuerySessaoUsuario }