import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  min-height: 100vh;

  body {
    margin: 0;
    
    * {
      box-sizing: border-box;
    }
  }
`;
