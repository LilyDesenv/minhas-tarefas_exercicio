import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      1,
      'Titulo da Tarefa 1',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      'Descrição da Tarefa 1'
    ),
    new Tarefa(
      1,
      'Titulo da Tarefa 2',
      enums.Prioridade.NORMAL,
      enums.Status.PENDENTE,
      'Descrição da Tarefa 2'
    ),
    new Tarefa(
      1,
      'Titulo da Tarefa 3',
      enums.Prioridade.IMPORTANTE,
      enums.Status.CONCLUIDO,
      'Descrição da Tarefa 3'
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((Tarefa) => Tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions

export default tarefasSlice.reducer
