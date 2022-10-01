import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0f1b4d',
      light: '#7498f6',
    },
    text: {
      primary: '#0f1b4d',
      secondary: '#1386f1',
    },
  },
});

export default theme;
export const bgColor = '#e7f0ff';
export const skyBlueColor = '#489df1';
