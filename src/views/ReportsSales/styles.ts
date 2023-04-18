import styled from "styled-components";
import { inputBorderColor } from "../../globals";

export const TableRow = styled.div`
  display: flex;
  justify-content: space-around;
  border: 2px solid ${inputBorderColor};
`

export const WrapperTable = styled.div`
  max-height: 90%;
  overflow-y: scroll;
`

export const TableColumn = styled.div`
  p {
    text-align: left;
  }
`

export const WrapperProducts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
  border: 2px solid ${inputBorderColor};
`

export const WrapperTableCard = styled.div`
  margin-bottom: 20px;
  border: 2px solid ${inputBorderColor};
`

export const WrapperReport = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const WrapperFilter = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;

  div {
    width: 40%;
  }
`