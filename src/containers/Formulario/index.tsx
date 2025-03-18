import * as S from '../../styles'

const Formulario = () => (
  <S.Container>
    <S.Titulo>Cadastrar Novo Contato:</S.Titulo>
    <form>
      <S.Campo type="text" placeholder="Nome Completo" />
      <S.Campo type="telefone" placeholder="Telefone" />
      <S.Campo type="email" placeholder="Email" />
    </form>
    <S.BotaoBuscaEAdicao>Cadastrar</S.BotaoBuscaEAdicao>
    <S.Botao>Voltar à Lista</S.Botao>
  </S.Container>
)

export default Formulario
