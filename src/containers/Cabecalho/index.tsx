import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import * as S from './styles'
import { Titulo } from '../../styles'

const Cabecalho = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  return (
    <>
      <Titulo>MEUS CONTATOS</Titulo>
      <S.Contador>{itens.length} contatos cadastrados.</S.Contador>
    </>
  )
}

export default Cabecalho
