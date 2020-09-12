import { createGlobalStyle } from "styled-components";

import githubDark from "../assets/github-dark.svg";
import githubLight from "../assets/github-light.svg";

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  background: ${({ theme }) => theme.colors.primary} 
  url(${({ theme }) => (theme.title === "light" ? githubLight : githubDark)}) 
  no-repeat 70% top;
  -webkit-font-smoothing: antialiased;
  font-size: 1px;
  transition: background-color 0.2s ease-in;
  @media(max-width: 768px){
    background-size: 80vw;
  }
  /* @media(min-width: 768px){
    font-size: 16px;
  }
  @media(min-width: 1440px){
    font-size: 18px;
  } */
}

#root {
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 24px;
}

body, button, input {
  font-size: 16px;
  color: ${({ theme }) => theme.colors.title};
}

*, input, button {
  border: none;
  background: none;
  font-family: "Roboto", sans-serif;
}

button {
  cursor: pointer;
}

`;
