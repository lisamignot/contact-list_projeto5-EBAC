import AdicionarContato from '../../components/AdicionarContato'
import BarraDeBusca from '../../containers/BarraDeBusca'
import Cabecalho from '../../containers/Cabecalho'
import ListaDeContatos from '../../containers/ListaDeContatos'

const Home = () => (
  <>
    <Cabecalho />
    <BarraDeBusca />
    <AdicionarContato />
    <ListaDeContatos />
  </>
)

export default Home
