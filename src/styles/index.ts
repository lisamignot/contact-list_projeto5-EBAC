import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`
export const Container = styled.main`
  max-width: 80%;
  margin: 30px auto;
  height: 90vh;
`

export const Titulo = styled.h1`
  background-color: ${variaveis.azul};
  border-radius: 0 0 10px 10px;
  color: ${variaveis.branco};
  text-align: center;
  padding-top: 24px;
  padding-bottom: 24px;
`

export const Botao = styled.button`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  padding: 10px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.cinza};
  border-radius: 8px;
  margin-top: 24px;
  margin-left: 12px;
`

export const Campo = styled.input`
  border-radius: 8px;
  padding: 8px;
  background-color: ${variaveis.branco};
  color: ${variaveis.azul};
  border-color: ${variaveis.azul};
  font-weight: bold;
  margin-top: 24px;
  display: block;
  width: 100%;
`
export const BotaoBuscaEAdicao = styled(Botao)`
  background-color: ${variaveis.verde};
`

export default EstiloGlobal
