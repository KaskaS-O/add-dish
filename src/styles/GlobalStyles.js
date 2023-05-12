import { createGlobalStyle } from "styled-components";
import { devices } from "./breakpoints";

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

  @media ${devices.laptopS} and (orientation: landscape) {
    height: 100vh;
    overflow: hidden;
  }
 
}

label, legend {
    display: block;
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: 500;
    color: var(--labels);

    @media ${devices.tabletS} {
    font-size: 18px;
    }
}

input {
    margin: 0 auto 20px;
    height: 40px;
    width: 100%;
    padding: 0 16px;
    font-size: 14px;
    border: 1px solid var(--border);
    border-radius: 20px;
    background-color: inherit;

    @media ${devices.tabletS} {
    font-size: 16px;
    }

    @media ${devices.laptopS} and (orientation: landscape) {
      margin-bottom: 15px;
    }

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
