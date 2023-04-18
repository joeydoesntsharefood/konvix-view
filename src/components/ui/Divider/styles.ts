import styled from "styled-components";
import { inputBorderColor, primaryFontColor } from "../../../globals";

export const WrapperDivider = styled.div`
  width: 100%;
  height: 2px;
  margin-top: 20px;
  margin-bottom: 20px;
  background: ${primaryFontColor};
`

export const WrapperDividers = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  h2 {
    color: ${primaryFontColor};
  }
`
