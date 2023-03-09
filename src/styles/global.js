import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    background-color:rgb(140, 17, 190);
  }
  button {
    cursor: pointer;
  }
`;
export default GlobalStyle;