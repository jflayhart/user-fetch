

import type { AppProps } from 'next/app'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from '../components/globalStyles'
import Head from "next/head";
import React from "react";

const theme: DefaultTheme = {
  colors: {
    primary: '#300d38',
    secondary: '#ffa900',
    error: '#dc3545',
    white: '#fff'
  },
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" sizes="48x48" href="/assets/favicon/icon-48x48.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/assets/favicon/icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="96x96" href="/assets/favicon/icon-96x96.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/assets/favicon/icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="/assets/favicon/icon-192x192.png" />
        <link rel="apple-touch-icon" sizes="256x256" href="/assets/favicon/icon-256x256.png" />
        <link rel="apple-touch-icon" sizes="512x512" href="/assets/favicon/icon-512x512.png" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}