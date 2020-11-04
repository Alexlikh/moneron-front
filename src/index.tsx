import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#todo',
      main: '#todo',
      dark: '#todo',
      contrastText: '#todo'
    },
    secondary: {
      light: '#todo',
      main: '#todo',
      dark: '#todo',
      contrastText: '#todo'
    }
  }
})


ReactDOM.render((
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
    ), document.getElementById('root') )