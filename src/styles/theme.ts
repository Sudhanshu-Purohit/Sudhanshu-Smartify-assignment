import { PaletteOptions, createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypeText {
    primaryPurple: string,
    primary: string,
    dark: string,
    grey: string,
    white: string
  }
  interface TypeBackground {
    white: string,
    grey: string,
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#9747FF',
    },
    success: {
      main: '#25AE9D',
    },
    background: {
      default: '#FFFFFF',
      grey: '#E1E3E7',
    },
    text: {
      primaryPurple: '#9747FF',
      primary: '#000',
      dark: '#262D31',
      grey: '#7B7B7B',
      white: '#FFFFFF',
    }
  },
  typography: {
    fontSize: 16, // Default font size
    fontFamily: 'Poppins, sans-serif',
    h5: {
      fontSize: '24px',
      fontWeight: 600,
    }
  }
});

export default theme;