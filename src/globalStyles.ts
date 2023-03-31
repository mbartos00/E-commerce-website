import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  body{
    min-width:100vh;
    font-family: 'Roboto', sans-serif;
    font-size:1rem;
  }
  h1,h2,h3{
    font-weight:bold;
  }
  h1{
    font-size: 3rem;
  }
  h2{
    font-size: 1.75rem;
  }
  h3{
    font-size: 1.125rem;

  }
`;
export default GlobalStyle;
