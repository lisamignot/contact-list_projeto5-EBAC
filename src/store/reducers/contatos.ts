import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}
const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'Lisa Mignot',
      telefone: 21964500667,
      email: 'lisammignot@uol.com'
    },
    {
      id: 2,
      nome: 'Vivian Mignot',
      telefone: 2196450000,
      email: 'vivik@uol.com'
    },
    {
      id: 3,
      nome: 'Julia Mignot',
      telefone: 219645005555,
      email: 'jujumig@uol.com'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    }
  }
})

export const { remover } = contatosSlice.actions

export default contatosSlice.reducer
