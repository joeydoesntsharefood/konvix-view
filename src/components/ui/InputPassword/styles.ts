import styled from "styled-components";
import { inputBorderColor, inputBorderRadius, inputHeight, inputPadding, noFocusColorFont, primaryFontColor } from "../../../globals";

export const WrapperInputText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;

  label {
    color: ${primaryFontColor};
  }
  
  input {
    padding: ${inputPadding};
    color: ${noFocusColorFont};
    height: ${inputHeight};
    width: 100%;
    background: transparent;
    border: 2px solid ${inputBorderColor};
    border-radius: ${inputBorderRadius};

    :focus {
      color: ${primaryFontColor};
    }
  }
`