import styled from "styled-components";
import { buttonPrimaryColor, buttonPrimaryColorDisabled, buttonPrimaryColorHover, inputBorderColor, inputBorderRadius, inputHeight, inputPadding, noFocusColorFont, primaryFontColor } from "../../../globals";

export const WrapperSubmitButton = styled.div`
  height: ${inputHeight};
  padding: ${inputPadding};
  width: 100%;

  button {
    height: ${inputHeight};
    padding: ${inputPadding};
    width: 100%;
    background: ${buttonPrimaryColor};
    color: ${primaryFontColor};
    border: 2px solid transparent;
    border-radius: ${inputBorderRadius};
    :hover {
      cursor: pointer;
      background: ${buttonPrimaryColorHover};
    }
    :disabled {
      background: ${buttonPrimaryColorDisabled};
      color: ${noFocusColorFont};
      cursor: not-allowed;
    }
  }
`