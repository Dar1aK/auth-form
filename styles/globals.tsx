import React from "react";
import { css, Global, useTheme } from "@emotion/react";

export const GlobalStyles = () => {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        html,
        body {
          padding: 0;
          margin: 0;
        }
        body {
          font: 16px/1.4 "Montserrat", -apple-system, BlinkMacSystemFont,
            Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
            Helvetica Neue, sans-serif;
          background: ${theme.colors.cups.white};
          color: ${theme.colors.cups.espresso};
        }
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
        a {
          color: inherit;
          text-decoration: none;
        }
        /* montserrat-regular - latin */
        @font-face {
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 400;
          src: local(""),
            url("../fonts/montserrat-regular.woff2") format("woff2"),
            url("../fonts/montserrat-regular.woff") format("woff");
        }
      `}
    />
  );
};
