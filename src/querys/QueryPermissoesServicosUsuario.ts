
class QueryPermissoesServicosUsuario{
      procurarPorId():string{
        return `select *
                  from permissoesservicosusuario
                where id = $1
                  and ativo = true`
    }
    procurarPorIdUsuario():string{
        return `select *
                  from permissoesservicosusuario
                 where idusuario = $1
                   and ativo = true`
    }
    procurarPorIdUsuarioEIdServico():string{
      return `select *
                from permissoesservicosusuario
               where idusuario = $1
                 and idservico = $2
                 and ativo = true`
    }
    alterar():string{
        return `update permissoesservicosusuario
                  set podeconsultar = $1,
                      podeinserir = $2,
                      podealterar = $3,
                      podedeletar = $4,
                      alteradoem = 'now',
                      alteradopor = $5
                where id = $6`
    }
    deletar():string{
      return `update permissoesservicosusuario
                 set ativo = false,
                     deletadoem = 'now',
                     deletadopor = $1
               where id = $2`
    }
    criar():string{
        return `insert into permissoesservicosusuario
                            (idusuario,
                             idservico,
                             podeconsultar,
                             podeinserir,
                             podealterar,
                             podedeletar,
                             criadopor)
                     values ($1,
                             $2,
                             $3,
                             $4,
                             $5,
                             $6,
                             $7) returning *`
    }
}

export { QueryPermissoesServicosUsuario }