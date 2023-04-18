import styled from "styled-components";
import { backgroundContent, inputBorderColor, inputHeight, noFocusColorFont, primaryFontColor } from "../../../globals";

export const WrapperSelect = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;

  label {
    color: ${primaryFontColor};
  }

  select {
    color: ${noFocusColorFont};
    width: 100%;
    background: transparent;
    border: 2px solid ${inputBorderColor};
    height: ${inputHeight};

    :focus {
      color: ${primaryFontColor};
      border-color: ${primaryFontColor};
    }

    option {
      background: ${backgroundContent};
      color: ${primaryFontColor};
    }
  }
`