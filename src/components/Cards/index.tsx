import { useState } from 'react'
import { Botao } from '../../styles'
import * as S from './styles'

type Props = {
  contato: string
  telefone: number
  email: string
}

const Contato = ({ contato, telefone, email }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)
  return (
    <S.Card>
      <S.Nome>{contato}</S.Nome>
      <S.Telefone>{telefone}</S.Telefone>
      <S.Email>{email}</S.Email>
      <S.BarraDeAcoes>
        {estaEditando ? (
          <>
            <Botao onClick={() => setEstaEditando(false)}>Cancelar</Botao>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
          </>
        ) : (
          <>
            <S.BotaoNegativo>Excluir</S.BotaoNegativo>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
          </>
        )}
      </S.BarraDeAcoes>
    </S.Card>
  )
}

export default Contato
