import styled from "styled-components";

export const StyledInputRange = styled.input`
  outline: none;
  appearance: none;
  padding: 0;
  margin-bottom: 0;
  height: 16px;
  border: none;
  border-radius: 8px;
  background-color: var(--border);
  cursor: pointer;
  overflow: hidden;

  &::-webkit-slider-runnable-track {
    width: 300px;
    height: 16px;
    background: var(--border);
    border: none;
    border-radius: 8x;
  }

  &::-moz-range-track {
    width: 300px;
    height: 16px;
    background: var(--border);
    border: none;
    border-radius: 8x;
  }

  &::-moz-range-thumb {
    appearance: none;
    border: none;
    margin-top: -3px;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background-color: var(--icons);
    box-shadow: -308px 0 0 300px var(--icons);
  }
  &::-webkit-slider-thumb {
    appearance: none;
    border: none;
    margin-top: -3px;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background-color: var(--icons);
    box-shadow: -308px 0 0 300px var(--icons);
  }

  &:focus {
    outline: none;
  }
`;

export const StyledDatalist = styled.datalist`
  display: flex;
  justify-content: space-between;
  width: 290px;
  margin-left: 6px;
  color: var(--labels);
  font-weight: 500;
`;
