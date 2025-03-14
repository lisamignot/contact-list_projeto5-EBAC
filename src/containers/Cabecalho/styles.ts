import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Titulo = styled.h1`
  background-color: ${variaveis.azul};
  border-radius: 0 0 10px 10px;
  color: ${variaveis.branco};
  text-align: center;
  padding-top: 24px;
  padding-bottom: 24px;
`

export const Subtitulo = styled.p`
  text-align: right;
  font-weight: bold;
  font-size: 16px;
  margin-top: 24px;
  margin-right: 24px;
`
export const Contador = styled.span`
  background-color: red;
`
