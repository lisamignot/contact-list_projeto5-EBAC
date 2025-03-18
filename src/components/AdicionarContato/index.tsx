import { Link } from 'react-router-dom'
import { BotaoAdicionar } from './styles'

const AdicionarContato = () => (
  <Link to="/novo">
    <BotaoAdicionar>Adicionar Contato +</BotaoAdicionar>
  </Link>
)

export default AdicionarContato
