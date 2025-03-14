import { useState } from 'react'
import { Botao } from '../../styles'
import * as S from './styles'
import { useDispatch } from 'react-redux'

import { remover } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const Contato = ({ nome, telefone, email, id }: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  return (
    <S.Card>
      <S.Nome>{nome}</S.Nome>
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
            <S.BotaoNegativo onClick={() => dispatch(remover(id))}>
              Excluir
            </S.BotaoNegativo>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
          </>
        )}
      </S.BarraDeAcoes>
    </S.Card>
  )
}

export default Contato
