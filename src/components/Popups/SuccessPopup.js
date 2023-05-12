import { StyledPopup, StyledTxt, StyledCheckedIcon } from "./style";

const SuccessPopup = () => {
  return (
    <StyledPopup>
      <StyledCheckedIcon />
      <StyledTxt success>Your dish was successfully added</StyledTxt>
    </StyledPopup>
  );
};

export default SuccessPopup;
