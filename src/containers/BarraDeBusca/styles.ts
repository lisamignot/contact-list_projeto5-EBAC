import styled from 'styled-components'

export const ContainerBusca = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  display: grid;
  grid-template-columns: 1fr auto auto;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 8px;
  }
`

export const Botoes = styled.div`
  display: flex;

  @media (max-width: 768px) {
    background-color: red;
    justify-content: center;
  }
`
