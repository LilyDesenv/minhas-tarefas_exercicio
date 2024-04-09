import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FiltroCard from '../../components/FiltroCArd'
import { Aside, Filtros } from './styles'
import { RootReducer } from '../../store'
import { Botao, Campo } from '../../styles'
import { alteraTermo } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/Tarefa'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Procurar"
              value={termo}
              onChange={(e) => dispatch(alteraTermo(e.target.value))}
            />
            <Filtros>
              <FiltroCard
                valor={enums.Status.PENDENTE}
                criterio="status"
                legenda="pendentes"
              />
              <FiltroCard
                valor={enums.Status.CONCLUIDO}
                criterio="status"
                legenda="concluídas"
              />
              <FiltroCard
                valor={enums.Prioridade.URGENTE}
                criterio="prioridade"
                legenda="urgentes"
              />
              <FiltroCard
                valor={enums.Prioridade.IMPORTANTE}
                criterio="prioridade"
                legenda="importantes"
              />
              <FiltroCard
                valor={enums.Prioridade.NORMAL}
                criterio="prioridade"
                legenda="normais"
              />
              <FiltroCard criterio="todas" legenda="todas" />
            </Filtros>
          </>
        ) : (
          <Botao type="button" onClick={() => navigate('/')}>
            Voltar a lista de Tarefas
          </Botao>
        )}
      </div>
    </Aside>
  )
}
export default BarraLateral
