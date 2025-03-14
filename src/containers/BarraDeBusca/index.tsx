import { Botao } from '../../styles'
import { ContainerBusca, Campo } from './styles'

const BarraDeBusca = () => (
  <ContainerBusca>
    <Campo type="text" placeholder="Buscar contato" />
    <Botao type="submit">BUSCAR</Botao>
  </ContainerBusca>
)

export default BarraDeBusca
