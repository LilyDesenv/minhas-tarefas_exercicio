import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import { remover, editar, alteraStatus } from '../../store/reducers/tarefas'
import TarefaClass from '../../models/Tarefa'
import { BotaoSalvar, Botao } from '../../styles'
import * as enums from '../../utils/enums/Tarefa'

type Props = TarefaClass

const Tarefa = ({ descricao: desc, prioridade, status, titulo, id }: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricao, setDescricao] = useState('')

  useEffect(() => {
    if (desc.length > 0) {
      setDescricao(desc)
    }
  }, [desc])

  function cancelarEdicao() {
    setEstaEditando(false)
    setDescricao(desc)
  }

  function alteraStatusTarefa(e: ChangeEvent<HTMLInputElement>) {
    dispatch(
      alteraStatus({
        id,
        finalizado: e.target.checked
      })
    )
  }

  return (
    <S.Card>
      <label htmlFor={titulo}>
        <input
          type="checkbox"
          id={titulo}
          onChange={alteraStatusTarefa}
          checked={status === enums.Status.CONCLUIDO}
        />
        <S.Titulo>
          {estaEditando && <em>Editando...</em>}
          {titulo}
        </S.Titulo>
      </label>
      <S.Tag paramentro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag paramentro="status" status={status}>
        {status}
      </S.Tag>
      <S.Descricao
        disabled={!estaEditando}
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    descricao,
                    id,
                    prioridade,
                    status,
                    titulo
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}
export default Tarefa
