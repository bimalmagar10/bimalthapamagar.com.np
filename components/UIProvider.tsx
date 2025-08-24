"use client";
import { ChakraProvider, useColorMode } from "@chakra-ui/react";
import theme from "../styles/theme";
import Layout from "./Layout";
import { Global, css } from "@emotion/react";
import { prismLightTheme, prismDarkTheme } from "../styles/prism";

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Global
        styles={css`
          ${colorMode === "light" ? prismLightTheme : prismDarkTheme};
          ::selection {
            background-color: #2c6baf;
            color: #fefefe;
          }
          ::-moz-selection {
            background: #2c6baf;
            color: #fefefe;
          }
          html {
            min-width: 356px;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === "light" ? "white" : "#171717"};
          }
        `}
      />
      {children}
    </>
  );
};

const UIProvider = ({ children }) => {
  return (
    // <CacheProvider>
    <ChakraProvider resetCSS theme={theme}>
      <GlobalStyle>
        <Layout>{children}</Layout>
      </GlobalStyle>
    </ChakraProvider>
    // </CacheProvider>
  );
};

export default UIProvider;
