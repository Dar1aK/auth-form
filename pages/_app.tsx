import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";

import { theme } from "../styles/theme";
import { GlobalStyles } from "../styles/globals";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
