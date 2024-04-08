import FiltroCard from '../../components/FiltroCArd'
import { Aside, Filtros, Campo } from './styles'

const BarraLateral = () => (
  <Aside>
    <div>
      <Campo type="text" placeholder="Procurar" />
      <Filtros>
        <FiltroCard legenda="pendentes" contador={0} />
        <FiltroCard legenda="concluídas" contador={0} />
        <FiltroCard legenda="urgentes" contador={0} />
        <FiltroCard legenda="importantes" contador={0} />
        <FiltroCard legenda="normais" contador={0} />
        <FiltroCard legenda="todas" contador={0} ativo />
      </Filtros>
    </div>
  </Aside>
)
export default BarraLateral
