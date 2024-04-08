import { useSelector } from 'react-redux'
import Tarefa from '../../components/Tarefa'
import { Container, Titulo } from './styles'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { tarefas } = useSelector((state: RootReducer) => state)

  return (
    <Container>
      <Titulo>
        2 Tarefas marcadas como: &quot;categoria&quot; e &quot;termo&quot;
      </Titulo>
      <ul>
        {tarefas.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              titulo={t.titulo}
              prioridade={t.prioridade}
              descricao={t.descricao}
              status={t.status}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeTarefas

// const tarefas = [
//   {
//     titulo: 'Titulo da Tarefa 1',
//     descricaro:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis minima iste tempore fuga vel quo perferendis animi laborum quod totam assumenda, adipisci soluta quos voluptas non expedita fugiat sit commodi?',
//     prioridade: enums.Prioridade.IMPORTANTE,
//     status: enums.Status.PENDENTE
//   },
//   {
//     titulo: 'Titulo da Tarefa 2',
//     descricaro:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis minima iste tempore fuga vel quo perferendis animi laborum quod totam assumenda, adipisci soluta quos voluptas non expedita fugiat sit commodi?',
//     prioridade: enums.Prioridade.URGENTE,
//     status: enums.Status.CONCLUIDO
//   },
//   {
//     titulo: 'Titulo da Tarefa 3',
//     descricaro:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis minima iste tempore fuga vel quo perferendis animi laborum quod totam assumenda, adipisci soluta quos voluptas non expedita fugiat sit commodi?',
//     prioridade: enums.Prioridade.NORMAL,
//     status: enums.Status.PENDENTE
//   },
//   {
//     titulo: 'Titulo da Tarefa 4',
//     descricaro:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis minima iste tempore fuga vel quo perferendis animi laborum quod totam assumenda, adipisci soluta quos voluptas non expedita fugiat sit commodi?',
//     prioridade: enums.Prioridade.NORMAL,
//     status: enums.Status.PENDENTE
//   },
//   {
//     titulo: 'Titulo da Tarefa 5',
//     descricaro:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis minima iste tempore fuga vel quo perferendis animi laborum quod totam assumenda, adipisci soluta quos voluptas non expedita fugiat sit commodi?',
//     prioridade: enums.Prioridade.IMPORTANTE,
//     status: enums.Status.PENDENTE
//   }
// ]
