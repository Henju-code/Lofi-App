import { ThemeProvider, createMuiTheme } from '@material-ui/core';

import Login from "./pages/Login";
import Home from "./pages/Home";


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
      paper: '#fff'
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme} >
      <Home />
    </ThemeProvider>
  );
}

export default App;
