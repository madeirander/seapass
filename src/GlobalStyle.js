import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    color: #4C5569;
    background: #F8F9FB;
    font-family: 'Ubuntu', sans-serif;
  }
`

export default GlobalStyle
