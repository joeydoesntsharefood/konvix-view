import styled from "styled-components";
import { cardBorderRadius, clientCardBackground } from "../../globals";

export const ClientCard = styled.div`
  width: 99%;
  margin-bottom: 5px;
  justify-content: space-around;
  display: flex;
  background: ${clientCardBackground};
  border-radius: ${cardBorderRadius};
`

export const WrapperAction = styled.div`
  display: flex;
  align-items: center;
`

export const Row = styled.div`
  display: flex;
  flex-direction: column;
`

export const WrapperUserList = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 75%;
  overflow-y: scroll;
  width: 100%;
`

export const WrapperFilters =styled.div`
  display: flex;
  justify-content: space-around;
`

export const WrapperViewClients = styled.div`
  height: 100%;
`

export const WrapperHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;

  div {
    width: 30%;
  }
`