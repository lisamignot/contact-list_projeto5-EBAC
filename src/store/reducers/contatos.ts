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
      telefone: '21964500667',
      email: 'lisammignot@uol.com'
    },
    {
      id: 2,
      nome: 'Vivian Mignot',
      telefone: '2196450000',
      email: 'vivik@uol.com'
    },
    {
      id: 3,
      nome: 'Julia Mignot',
      telefone: '219645005555',
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
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )
      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Contato>) => {
      const dadosDuplicados: string[] = []

      const contatoExiste = state.itens.find((contato) => {
        const nomeDuplicado =
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
        const telefoneDuplicado = contato.telefone === action.payload.telefone
        const emailDuplicado =
          contato.email.toLowerCase() === action.payload.email.toLowerCase()

        if (nomeDuplicado) dadosDuplicados.push('Nome já cadastrado.')
        if (telefoneDuplicado) dadosDuplicados.push('Telefone já cadastrado.')
        if (emailDuplicado) dadosDuplicados.push('Email já cadastrado.')

        return nomeDuplicado || telefoneDuplicado || emailDuplicado
      })

      if (contatoExiste) {
        alert(`Erro ao cadastrar: ${dadosDuplicados.join(', ')}`)
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions

export default contatosSlice.reducer
