import { useDispatch } from 'react-redux'
import { Botao, BotaoBuscaEAdicao, Campo } from '../../styles'
import { ContainerBusca } from './styles'
import { alteraBusca } from '../../store/reducers/filtro'
import { useState } from 'react'

const BarraDeBusca = () => {
  const dispatch = useDispatch()
  const [termoBusca, setTermoBusca] = useState('')

  const buscar = () => {
    dispatch(alteraBusca(termoBusca))
  }

  const limpaBusca = () => {
    setTermoBusca('')
    dispatch(alteraBusca(''))
  }

  return (
    <ContainerBusca>
      <Campo
        type="text"
        placeholder="Buscar contato"
        value={termoBusca}
        onChange={(e) => setTermoBusca(e.target.value)}
      />
      <BotaoBuscaEAdicao onClick={buscar}>BUSCAR</BotaoBuscaEAdicao>
      <Botao onClick={limpaBusca}>Limpar Busca</Botao>
    </ContainerBusca>
  )
}
export default BarraDeBusca
