import { useEffect, useState } from 'react'
import { Botao } from '../../styles'
import * as S from './styles'
import { useDispatch } from 'react-redux'

import { editar, remover } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const Contato = ({
  nome: nomeOriginal,
  telefone: telefoneOriginal,
  email: emailOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (estaEditando) {
      setNome(nomeOriginal)
      setTelefone(telefoneOriginal)
      setEmail(emailOriginal)
    }
  }, [estaEditando, nomeOriginal, telefoneOriginal, emailOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setNome(nomeOriginal)
    setTelefone(telefoneOriginal)
    setEmail(emailOriginal)
  }

  return (
    <S.Card>
      {estaEditando ? (
        <>
          <S.ItensEmEdicao
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <S.ItensEmEdicao
            type="text"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
          <S.ItensEmEdicao
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </>
      ) : (
        <>
          <S.Nome>{nomeOriginal}</S.Nome>
          <S.Dados>{telefoneOriginal}</S.Dados>
          <S.Dados>{emailOriginal}</S.Dados>
        </>
      )}

      <S.BarraDeAcoes>
        {estaEditando ? (
          <>
            <Botao onClick={cancelarEdicao}>CANCELAR</Botao>
            <S.BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    nome,
                    telefone,
                    email,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              SALVAR
            </S.BotaoSalvar>
          </>
        ) : (
          <>
            <S.BotaoNegativo onClick={() => dispatch(remover(id))}>
              EXCLUIR
            </S.BotaoNegativo>
            <Botao onClick={() => setEstaEditando(true)}>EDITAR</Botao>
          </>
        )}
      </S.BarraDeAcoes>
    </S.Card>
  )
}

export default Contato
