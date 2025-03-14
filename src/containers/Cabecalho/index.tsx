import * as S from './styles'

export type Props = {
  contador: number
}

const Cabecalho = ({ contador }: Props) => (
  <>
    <S.Titulo>MEUS CONTATOS</S.Titulo>
    <S.Subtitulo>
      <S.Contador>{contador}</S.Contador> contatos cadastrados.
    </S.Subtitulo>
  </>
)

export default Cabecalho
