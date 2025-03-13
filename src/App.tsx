import AdicionarContato from './containers/AdicionarContato'
import BarraDeBusca from './containers/BarraDeBusca'
import Cabecalho from './containers/Cabecalho'
import ListaDeContatos from './containers/ListaDeContatos'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Cabecalho contador={1} />
        <BarraDeBusca />
        <AdicionarContato />
        <ListaDeContatos />
      </Container>
    </>
  )
}

export default App
