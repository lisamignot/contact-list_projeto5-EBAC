import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const ContainerBusca = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 16px;
  width: 100%;
`
export const Campo = styled.input`
  border-radius: 8px;
  padding: 8px;
  background-color: ${variaveis.branco};
  color: ${variaveis.azul};
  border-color: ${variaveis.azul};
  font-weight: bold;
`
