import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      titulo: 'Titulo da Tarefa 1',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE,
      descricao: 'Descrição da Tarefa 1'
    },
    {
      id: 2,
      titulo: 'Titulo da Tarefa 2',
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.CONCLUIDO,
      descricao: 'Descrição da Tarefa 2'
    },
    {
      id: 3,
      titulo: 'Titulo da Tarefa 3',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.PENDENTE,
      descricao: 'Descrição da Tarefa 3'
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Tarefa, 'id'>>) => {
      const tarefaExiste = state.itens.find(
        (tarefa) =>
          tarefa.titulo.toLowerCase() === action.payload.titulo.toLowerCase()
      )
      if (tarefaExiste) {
        alert('Já existe uma tarefa com esse título')
      } else {
        const ultimaTarefa = state.itens[state.itens.length - 1]
        const tarefaNova = {
          ...action.payload,
          id: ultimaTarefa ? ultimaTarefa.id + 1 : 1
        }
        state.itens.push(tarefaNova)
      }
    },
    alteraStatus: (
      state,
      action: PayloadAction<{ id: number; finalizado: boolean }>
    ) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa].status = action.payload.finalizado
          ? enums.Status.CONCLUIDO
          : enums.Status.PENDENTE
      }
    }
  }
})

export const { remover, editar, cadastrar, alteraStatus } = tarefasSlice.actions

export default tarefasSlice.reducer
