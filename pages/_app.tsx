import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";

import { theme } from "../styles/theme";
import { GlobalStyles } from "../styles/globals";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
