import styled from "styled-components";
import { devices } from "../../styles/breakpoints";

export const StyledApp = styled.div`
  /* height: 100%; */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  @media ${devices.laptopS} and (orientation: landscape) {
    left: 50%;
    width: 50%;
    height: 100vh;
    overflow: hidden;
  }
`;

export const StyledTitle = styled.h1`
  margin-bottom: 30px;
  text-align: center;
  color: var(--title);
  font-size: 36px;

  @media ${devices.tabletS} {
    font-size: 40px;
  }

  @media ${devices.laptopS} and (orientation: landscape) {
    position: absolute;
    top: calc(20vh / 2);
    left: 50%;
    transform: translateX(-50%);
    width: auto;
    font-size: 60px;
  }

  @media ${devices.desktop} {
    font-size: 75px;
  }
`;
