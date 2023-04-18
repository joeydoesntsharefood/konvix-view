import styled from "styled-components";
import { cardBackground, cardBorderRadius, primaryFontColor } from "../../globals";

export const WrapperCardContent = styled.div`
  background: ${cardBackground};
  width: 95%;
  height: 85%;
  border-radius: ${cardBorderRadius};
  padding: 10px 20px 10px 20px;
`

export const WrapperContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const WrapperTitleContent = styled.h2`
  color: ${primaryFontColor};
  text-align: left;
  width: 95%;
`

