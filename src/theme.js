import { createTheme } from '@mui/material/styles';
import { COLORS } from './constants';

const theme = createTheme({
  palette: {
    primary: {
      main : COLORS.white
      // main: '#1976d2', // Example primary color
    },
    secondary: {
      main: '#dc004e', // Example secondary color
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2rem',
    },
    // Add other typography settings here
  },
  // Add more customizations here (e.g., spacing, shape, etc.)
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(245, 245, 245, 1)',
          color: 'black',
          minWidth:'auto',
          '&:hover': {
            backgroundColor: 'rgba(220, 220, 220, 1)', // Adjust hover background color if needed
          },
        },
      },
    },
  },
});

export default theme;
