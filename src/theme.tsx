import { extendTheme } from "@chakra-ui/react";

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = {
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
};

const theme = extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: false,
  semanticTokens: {
    radii: {
      button: "12px",
    },
  },
  fonts,
  breakpoints,
});

export default theme;
