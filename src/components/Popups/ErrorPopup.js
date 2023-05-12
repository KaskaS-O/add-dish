import { StyledCloseBtn, StyledPopup, StyledTxt } from "./style";

const ErrorPopup = (props) => {
  return (
    <StyledPopup isOpen={props.isOpen}>
      <StyledCloseBtn onClick={props.onClose}>
        <i className="fa-solid fa-square-xmark"></i>
      </StyledCloseBtn>
      <StyledTxt>{props.errorMsg}</StyledTxt>
    </StyledPopup>
  );
};

export default ErrorPopup;
