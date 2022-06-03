import React from 'react';
import { Minter, Animation } from './components'
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import { createTheme } from '@mui/material/styles';
import ThemeProvider from '@mui/system/ThemeProvider/ThemeProvider';

const theme = createTheme({
  palette: {
    primary: {
      main: '#369332',
      light: '#67ae64',
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box className="App" 
        sx={{
          margin: 0,
          padding: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
          flexDirection: 'column',
        }} 
        >
        <Animation />
        <Minter />
      </Box>
    </ThemeProvider>
  );
}

export default App;
