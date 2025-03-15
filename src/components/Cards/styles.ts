import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Botao } from '../../styles'
import { Campo } from '../../containers/BarraDeBusca/styles'

export const Card = styled.div`
  background-color: ${variaveis.branco};
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-top: 8px;
  margin-bottom: 24px;
  margin-right: 16px;
  border-radius: 8px;
`

export const Nome = styled.h3`
  font-size: 20px;
  padding-bottom: 16px;
`

export const Telefone = styled.p`
  margin-bottom: 12px;
  font-size: 14px;
`

export const Email = styled.p`
  font-size: 14px;
  margin-bottom: 12px;
`

export const BarraDeAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
  text-align: right;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
  margin-left: 12px;
`
export const BotaoNegativo = styled(Botao)`
  background-color: ${variaveis.vermelho};
  margin-right: 12px;
`

export const ItensEmEdicao = styled(Campo)`
  display: block;
  width: 50%;
  margin-bottom: 16px;
`
