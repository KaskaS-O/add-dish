import styled from "styled-components";
import { ReactComponent as CheckedIcon } from "../../images/checked-svgrepo-com.svg";

export const StyledPopup = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80vw;
  max-width: 500px;
  padding: 20px;
  background-color: var(--popups);
  box-shadow: 3px 3px 10px var(--labels);
  color: var(--title);
  font-size: 14px;
`;

export const StyledTxt = styled.p`
  text-align: ${(props) => (props.success ? "center" : "left")};
  margin-right: ${(props) => (props.success ? "0" : "20px")};
`;

export const StyledCloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background-color: transparent;
  cursor: pointer;

  i {
    color: var(--title);
    font-size: 24px;
    transition: 0.2s;
    &:hover {
      color: var(--labels);
    }
  }
`;

export const StyledCheckedIcon = styled(CheckedIcon)`
  display: block;
  fill: var(--icons);
  height: 40px;
  width: 40px;
  margin: 0 auto 20px;
`;
