
import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../config/theme';
import createEmotionCache from '../config/createEmotionCache';
import '../styles/globals.css'
import Navbar from '@/components/Navbar';
import { GlobalContextProvider } from '@/context/global';
import { Footer } from '@/components/Footer';
import Contacts from '@/components/Contacts';


// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>IDD!</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalContextProvider>
          <CssBaseline />
          <Navbar/>
          <Component {...pageProps} />
          <Contacts/>
          <Footer/>
        </GlobalContextProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}