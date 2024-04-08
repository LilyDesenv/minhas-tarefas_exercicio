import Tarefa from '../../components/Tarefa'
import { Container, Titulo } from './styles'

const ListaDeTarefas = () => (
  <Container>
    <Titulo>
      2 Tarefas marcadas como: &quot;categoria&quot; e &quot;termo&quot;
    </Titulo>
    <ul>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
    </ul>
  </Container>
)

export default ListaDeTarefas
