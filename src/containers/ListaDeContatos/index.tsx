import { useSelector } from 'react-redux'
import Contato from '../../components/Cards'
import { ContainerCards } from './styles'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  return (
    <ContainerCards>
      <ul>
        {itens.map((c) => (
          <li key={c.nome}>
            <Contato
              nome={c.nome}
              telefone={c.telefone}
              email={c.email}
              id={c.id}
            />
          </li>
        ))}
      </ul>
    </ContainerCards>
  )
}

export default ListaDeContatos
