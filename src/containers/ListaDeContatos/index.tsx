import Contato from '../../components/Cards'
import { ContainerCards } from './styles'

const contatos = [
  {
    contato: 'Lisa',
    telefone: 21964700514,
    email: 'lisam@gmail.com'
  },
  {
    contato: 'Vivian',
    telefone: 21964709021,
    email: 'viviamk@gmail.com'
  }
]
const ListaDeContatos = () => (
  <ContainerCards>
    <ul>
      {contatos.map((c) => (
        <li key={c.contato}>
          <Contato contato={c.contato} telefone={c.telefone} email={c.email} />
        </li>
      ))}
    </ul>
  </ContainerCards>
)

export default ListaDeContatos
