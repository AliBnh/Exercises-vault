import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const App = () => {
    const theme = createTheme({
        palette: {
            primary: {
              main: '#ffa726',
            },
            secondary: {
              main: '#fb8c00',
            },
          },
    });
    
  return(
    <ThemeProvider theme={theme}>
    <Box 
        width="400px" 
        sx={{ width: { xl: '1488px' } }} 
        m="auto"
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
    </Box>
    <Footer />
    </ThemeProvider>

  );
}

export default App;