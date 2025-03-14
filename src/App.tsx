import { Provider } from 'react-redux'
import AdicionarContato from './containers/AdicionarContato'
import BarraDeBusca from './containers/BarraDeBusca'
import Cabecalho from './containers/Cabecalho'
import ListaDeContatos from './containers/ListaDeContatos'
import EstiloGlobal, { Container } from './styles'

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <Cabecalho contador={1} />
        <BarraDeBusca />
        <AdicionarContato />
        <ListaDeContatos />
      </Container>
    </Provider>
  )
}

export default App
