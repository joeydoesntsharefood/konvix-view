import styled from "styled-components";
import { clientCardBackground, inputBorderRadius } from "../../globals";

export const WrapperSale = styled.div`
  height: 100%;
`

export const WrapperProduct = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
`

export const DescriptionProduct = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  justify-content: space-between;
  
  div {
    width: 30%;
  }
`

export const ActionsProduct = styled.div`
  display: flex;
  justify-content: space-around;

  div {
    width: 20%;
  }
`

export const ProductCard = styled.div`
  display: flex;
  margin-bottom: 20px;
  background: ${clientCardBackground};
  border-radius: ${inputBorderRadius};
  padding: 20px;
  width: 96%;
  justify-content: space-around;
`

export const WrapperProductList = styled.div`
  height: 55%;
  margin-bottom: 10px;
  overflow-y: scroll;
`