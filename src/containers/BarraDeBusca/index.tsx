import { useDispatch } from 'react-redux'
import { Botao } from '../../styles'
import { ContainerBusca, Campo } from './styles'
import { alteraBusca } from '../../store/reducers/filtro'
import { useState } from 'react'

const BarraDeBusca = () => {
  const dispatch = useDispatch()
  const [termoBusca, setTermoBusca] = useState('')

  const buscar = () => {
    dispatch(alteraBusca(termoBusca))
  }

  return (
    <ContainerBusca>
      <Campo
        type="text"
        placeholder="Buscar contato"
        value={termoBusca}
        onChange={(e) => setTermoBusca(e.target.value)}
      />
      <Botao onClick={buscar}>BUSCAR</Botao>
    </ContainerBusca>
  )
}
export default BarraDeBusca
