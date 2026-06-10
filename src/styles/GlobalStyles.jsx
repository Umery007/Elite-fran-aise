import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    background: #000000;
    min-height: 100vh;
    color: #111;
  }
`;
export default GlobalStyles;