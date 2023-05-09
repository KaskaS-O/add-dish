import styled from "styled-components";

export const StyledForm = styled.form`
  display: grid;
  gap: 5px;
  width: 80%;
  max-width: 500px;
  margin: 0 auto;
  padding: 8% 5%;
  background-color: #9db4c0;

  @media (max-width: 300px) {
    width: 90%;
  }

  @media (min-height: 800px) {
    padding: 5%;
  }
`;

export const StyledButton = styled.button`
  width: 70%;
  max-width: 300px;
  height: 40px;
  box-shadow: 5px 5px 10px #456b6b;
  justify-self: center;
  background-color: #fbfdfd;
  border: none;
  border-radius: 5px;
  color: #253237;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
`;

export const StyledSelect = styled.select`
  border-right: 10px solid transparent;
  cursor: pointer;
`;
