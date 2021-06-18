import { ThemeProvider, createMuiTheme } from '@material-ui/core';

import Login from "./pages/Login";
import Home from "./pages/Home";
import Details from './pages/Details';

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
      <Details />
    </ThemeProvider>
  );
}

export default App;
