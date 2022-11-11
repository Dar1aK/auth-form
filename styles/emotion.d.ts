import "@emotion/react";

declare module "@emotion/react" {
  interface CommonColors {
    veryLight: string;
    light: string;
    dark: string;
    veryDark: string;
  }

  interface CommonFonts {
    fontSize: number;
    lineHeight: string;
    fontWeight: number;
    color: string;
    fontStyle: string;
    fontFamily: string;
  }

  export interface Theme {
    colors: {
      primary: string;
      cups: {
        white: string;
        white10percent: string;
        chamomile: string;
        jasmine: string;
        irishBreakfast: string;
        earlGrey: string;
        oolong: string;
        ceylon: string;
        darjeeling: string;
        assam: string;
        espresso: string;
      };
      butterflypea: CommonColors & {
        butterflypea: string;
      };
    };
    breakpoints: {
      mobileLarge: number;
      tablet: number;
      tabletLarge: number;
      desktop: number;
    };
    typography: {
      h1: CommonFonts;
      h2: CommonFonts;
    };
  }
}
