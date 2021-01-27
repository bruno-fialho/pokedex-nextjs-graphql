import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
      height: 100vh;
      background: ${props => props.theme.colors.background};
      color: ${props => props.theme.colors.text};
      font: 400 1.6rem 'Open Sans', sans-serif;
    }
`
