import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material';
import theme from '../util/theme';
import Header from '../components/Header';
import wrapper from '../store/store';

export function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Header />
        <Component {...pageProps} />
      </>
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
