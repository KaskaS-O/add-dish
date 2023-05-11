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
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 8%;
  background-color: var(--form-bgc);

  @media ${devices.tabletS} {
    padding: 5%;
  }
`;

export const StyledFieldset = styled.fieldset`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  margin: 0 auto 10px;
  width: 300px;
  border: none;
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
  width: 300px;
  margin-top: 40px;
  justify-self: center;
  border: none;
  border-radius: 20px;
  font-size: 20px;
  font-weight: 700;
  background-color: var(--title);
  color: var(--btn-txt);
  cursor: pointer;
`;
