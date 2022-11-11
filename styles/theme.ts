const FONT = "Montserrat";

export const theme = {
  colors: {
    primary: "hotpink",
    cups: {
      white: "#FFFFFF",
      white10percent: "#FFFFFF1a",
      chamomile: "#F7F9FC",
      jasmine: "#E5EAF5",
      irishBreakfast: "#B4BED4",
      earlGrey: "#8B99B5",
      oolong: "#4A5980",
      ceylon: "#2A385B",
      darjeeling: "#1B2644",
      assam: "#192038",
      espresso: "#101426",
    },
    butterflypea: {
      veryLight: "#DAF2FF",
      light: "#67BCEC",
      butterflypea: "#268EC8",
      dark: "#11608C",
      veryDark: "#093F5E",
    },
  },
  breakpoints: {
    mobileLarge: 576,
    tablet: 768,
    tabletLarge: 992,
    desktop: 1200,
  },
  typography: {
    h1: {
      fontSize: 36,
      lineHeight: "44px",
      fontWeight: 700,
      color: "#192038", //assam
      fontStyle: "normal",
      fontFamily: FONT,
    },
    h2: {
      fontSize: 26,
      lineHeight: "32px",
      fontWeight: 700,
      color: "#192038", //assam
      fontStyle: "normal",
      fontFamily: FONT,
    },
  },
};
