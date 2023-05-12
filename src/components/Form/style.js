import styled, { css } from "styled-components";
import { devices } from "../../styles/breakpoints";
import { ReactComponent as PizzaIcon } from "../../images/pizza-svgrepo-com.svg";
import { ReactComponent as SoupIcon } from "../../images/soup-svgrepo-com.svg";
import { ReactComponent as SandwichIcon } from "../../images/sandwich-svgrepo-com.svg";

const svgStyle = css`
  height: 40px;
  width: 40px;
`;

export const StyledForm = styled.form`
  position: relative;
  width: 100%;
  max-width: 500px;
  min-height: calc(100vh - 35vh);
  margin: 35vh auto 0;
  padding: 8%;
  background-color: var(--form-bgc);

  @media ${devices.mobileS} {
    padding: 5vw;
  }
  @media ${devices.tabletS} {
    min-height: fit-content;
  }

  @media ${devices.laptopS} and (orientation: landscape) {
    position: absolute;
    top: 25vh;
    left: 50%;
    height: 575px;
    transform: translateX(-50%);
    padding: 30px 50px;
    margin: 0;
  }
`;

export const StyledFieldset = styled.fieldset`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  margin: 0 auto 10px;
  width: 100%;
  border: none;

  @media ${devices.laptopS} and (orientation: landscape) {
    margin-bottom: 0;
  }
`;

export const StyledLegend = styled.legend`
  grid-area: 1/1/2/4;
`;

export const StyledWrapper = styled.div`
  text-align: center;
`;

export const StyledDishTypeName = styled.span`
  transition: 0.2s;
`;

export const StyledRadioInput = styled.input`
  &:checked + label span {
    color: var(--icons);
  }
`;

export const StyledPizzaIcon = styled(PizzaIcon)`
  ${svgStyle}
`;

export const StyledSoupIcon = styled(SoupIcon)`
  ${svgStyle}
`;

export const StyledSandwichIcon = styled(SandwichIcon)`
  ${svgStyle}
`;

export const StyledImgContainer = styled.div`
  width: 40px;
  margin: 0 auto;
  padding-top: 5px;
`;

export const StyledButton = styled.button`
  height: 40px;
  width: 100%;
  margin-top: 20px;
  justify-self: center;
  border: none;
  border-radius: 20px;
  font-size: 20px;
  font-weight: 700;
  background-color: var(--title);
  color: var(--btn-txt);
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: var(--labels);
  }

  @media ${devices.laptopS} and (orientation: landscape) {
    position: absolute;
    bottom: 30px;
    left: 50px;
    width: 400px;
  }
`;
