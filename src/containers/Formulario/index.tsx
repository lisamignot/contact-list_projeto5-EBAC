import { FormEvent, useState } from 'react'
import * as S from '../../styles'
import { useDispatch } from 'react-redux'
import { cadastrar } from '../../store/reducers/contatos'
import { useNavigate } from 'react-router-dom'
import { MensagemSucesso } from './styles'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()
    const adicionarContato = { nome, telefone, email, id: 9 }
    dispatch(cadastrar(adicionarContato))

    setMensagem('Contato cadastrado com sucesso!')

    setTimeout(() => {
      setMensagem('')
    }, 2000)

    setNome('')
    setTelefone('')
    setEmail('')
  }

  return (
    <S.Container>
      <S.Titulo>Cadastrar Novo Contato:</S.Titulo>
      <form onSubmit={cadastrarContato}>
        <S.Campo
          value={nome}
          onChange={({ target }) => setNome(target.value)}
          type="text"
          placeholder="Nome Completo"
        />
        <S.Campo
          value={telefone}
          onChange={({ target }) => setTelefone(target.value)}
          type="telefone"
          placeholder="Telefone"
        />
        <S.Campo
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          type="email"
          placeholder="Email"
        />
        <S.BotaoBuscaEAdicao type="submit">CADASTRAR</S.BotaoBuscaEAdicao>
      </form>
      {mensagem && <MensagemSucesso>{mensagem}</MensagemSucesso>}
      <S.Botao onClick={() => navigate('/')}>VOLTAR À LISTA</S.Botao>
    </S.Container>
  )
}

export default Formulario
