import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type FiltroState = {
  busca: string
}

const initialState: FiltroState = {
  busca: ''
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alteraBusca: (state, action: PayloadAction<string>) => {
      state.busca = action.payload
    }
  }
})

export const { alteraBusca } = filtroSlice.actions
export default filtroSlice.reducer
