import FiltroCard from '../../components/FiltroCArd'
import { Aside, Filtros, Campo } from './styles'

const BarraLateral = () => (
  <Aside>
    <div>
      <Campo type="text" placeholder="Procurar" />
      <Filtros>
        <FiltroCard />
        <FiltroCard />
        <FiltroCard />
        <FiltroCard />
        <FiltroCard />
        <FiltroCard ativo />
      </Filtros>
    </div>
  </Aside>
)
export default BarraLateral
