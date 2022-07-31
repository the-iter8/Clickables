import React from 'react';
import ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#E7AB79',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#774360',
      paper: '#774360',
    },
    text: {
      primary: '#E7AB79',
    },
  },
  typography: {
    allVariants: {
      fontFamily: `"Lexend", "sans-serif", "Arial", sans-serif`,
    },
  },
});

root.render(
  <React.StrictMode>
    <CssBaseline />

    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
