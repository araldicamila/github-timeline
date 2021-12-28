import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --green: #2EA650;
    --white: #FFF;
    --blue: #7DCBEB;
    --purple: #A363DA;
    --yellow: #FDCD7B;
    --dark-background: #040D21;
  }

  body {
    width: 100%;
    min-height: 100vh;

    box-sizing: border-box;
  } 
  
  main {
    background-color: #040D21;

    width: 100%;
    min-height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  time {
    font-family: 'Poppins', sans-serif;
  } 
`;
