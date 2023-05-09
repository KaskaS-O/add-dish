import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 10px;
  font-family: 'Roboto', sans-serif;
  color: #253237;
}

body {
  width: 100%;
  min-height: 100vh;
  background-color: #B8CCD0;
}

label {
    font-size: 16px;
    font-weight: 500;
}

input, select {
    margin-bottom: 20px;
    height: 32px;
    padding: 0 10px;
    font-size: 14px;
    background-color: #EFF8F8;
    border: none;
    color: #4B575D;
    &::-webkit-calendar-picker-indicator {
        cursor: pointer;
    }
}

`;

export default GlobalStyles;
