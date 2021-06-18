import { ThemeProvider, createMuiTheme } from '@material-ui/core';

import Routes from './routes';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#cf974f'
    },
    secondary: {
      main: '#fff'
    },
    background: {
      default: '#fff',
      dark:  '#f4f6f8',
      paper: '#fdf5e6'
    }
  },
})

function App() {
  return (
    <ThemeProvider theme={theme} >
      <Routes />
    </ThemeProvider>
  );
}

export default App;
