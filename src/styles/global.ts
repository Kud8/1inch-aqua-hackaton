import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600&family=Inter:wght@400;500;600&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  :root {
    color-scheme: dark;
  }

  body {
    margin: 0;
    font-family: ${({ theme }) => theme.typography.fontFamily};
    background-color: ${({ theme }) => theme.colors.background};
    background-image: ${({ theme }) => theme.gradients.background};
    color: ${({ theme }) => theme.colors.text};
    min-height: 100vh;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  #root {
    min-height: 100vh;
  }

  ::selection {
    background-color: ${({ theme }) => theme.colors.accentPrimary};
    color: ${({ theme }) => theme.colors.surface};
  }
`

