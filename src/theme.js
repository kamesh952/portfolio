
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2563eb',
      dark: '#1d4ed8',
    },
    secondary: {
      main: '#10b981',
    },
    dark: {
      main: '#0f172a',
    },
    light: {
      main: '#f1f5f9',
    },
    gray: {
      main: '#64748b',
    },
    accent: {
      main: '#f97316',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: 'clamp(2rem, 6vw, 4rem)',
      lineHeight: 1.1,
    },
    h2: {
      fontWeight: 700,
      fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
      position: 'relative',
      display: 'inline-block',
      '&:after': {
        content: '""',
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '50%',
        height: '4px',
        backgroundColor: '#2563eb',
        borderRadius: '2px',
        transform: 'translateX(50%)',
      },
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.2rem',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '50px',
          fontWeight: 600,
          textTransform: 'none',
          padding: '0.75rem 1.5rem',
          minWidth: '120px',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-3px)',
            boxShadow: '0 10px 20px rgba(37, 99, 235, 0.2)',
          },
        },
      },
    },
  },
});

export default theme;