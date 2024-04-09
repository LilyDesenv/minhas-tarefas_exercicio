import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  *{
    padding:0;
    margin:0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`

export const Titulo = styled.h2`
  font-size: 18px;
  font-weight: bold;
  line-height: 21px;
  margin-bottom: 40px;
  margin-top: 40px;
  display: block;
`

export const Campo = styled.input`
  border-radius: 8px;
  border: 1px solid #666666;
  padding: 8px;
  background-color: #fff;
  font-weight: bold;
  width: 100%;
`
export const Botao = styled.button`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.cinzaEscuro};
  border-radius: 8px;
  margin-right: 8px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export default EstiloGlobal
