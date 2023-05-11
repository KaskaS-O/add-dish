import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 10px;
  font-family: var(--font);
}

body {
  width: 100%;
  min-height: 100vh;
 
}

label, legend {
    display: block;
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: 500;
    color: var(--labels);
}

input {
    margin: 0 auto 20px;
    height: 40px;
    width: 300px;
    padding: 0 16px;
    font-size: 14px;
    border: 1px solid var(--border);
    border-radius: 20px;
    background-color: inherit;
    &::-webkit-calendar-picker-indicator {
        cursor: pointer;
    }
   &:focus {
    outline: none;
    border: 2px solid var(--icons)
   }
}



.visually-hidden {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
 }

`;

export default GlobalStyles;
