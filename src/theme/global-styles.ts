import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    flex: 1;
  }


  body {
    margin: 0;
    
    * {
      box-sizing: border-box;
    }
  }
`;
