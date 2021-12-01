import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '../styles/globalStyle'

const theme = {
  colors: {
    
  }
}

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
