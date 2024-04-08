import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCArd'
import { Aside, Filtros, Campo } from './styles'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'

const BarraLateral = () => {
  const dispatch = useDispatch()

  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <Aside>
      <div>
        <Campo
          type="text"
          placeholder="Procurar"
          value={termo}
          onChange={(e) => dispatch(alteraTermo(e.target.value))}
        />
        <Filtros>
          <FiltroCard legenda="pendentes" contador={0} />
          <FiltroCard legenda="concluídas" contador={0} />
          <FiltroCard legenda="urgentes" contador={0} />
          <FiltroCard legenda="importantes" contador={0} />
          <FiltroCard legenda="normais" contador={0} />
          <FiltroCard legenda="todas" contador={0} ativo={true} />
        </Filtros>
      </div>
    </Aside>
  )
}
export default BarraLateral
