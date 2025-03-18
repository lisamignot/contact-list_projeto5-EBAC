import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import * as S from './styles'

const Cabecalho = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  return (
    <>
      <S.Titulo>MEUS CONTATOS</S.Titulo>
      <S.Subtitulo>
        <S.Contador>{itens.length}</S.Contador> contatos cadastrados.
      </S.Subtitulo>
    </>
  )
}

export default Cabecalho
