import React , { MouseEvent, useRef, useEffect } from 'react';
import { Minter, Animation } from './components'
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
  const tabsRef = useRef<null | HTMLDivElement>(null)
  const handleSeeCompleteList = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
      const tabs = tabsRef.current
      if (tabs) {
        tabs!.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    }
    useEffect(() => {
      console.log(tabsRef.current);
    }, [tabsRef]);
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
        <Animation clickFunction={handleSeeCompleteList}/>
        <Minter refFromApp={tabsRef} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
