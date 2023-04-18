import styled from "styled-components";

export const backgroundContent = '#252425';
export const backgroundSide = '#121213';
export const primaryFontColor =  '#fffefe';
export const inputBorderColor = '#2f2e2e';
export const inputBorderRadius = '5px';
export const inputHeight = '3vh';
export const inputPadding = '5px';
export const noFocusColorFont = 'rgb(190 185 185)';
export const gapForm = '20px';
export const widthColumnForm = '80%';
export const buttonPrimaryColor = '#45546e';
export const buttonPrimaryColorHover = "#48669b"
export const buttonPrimaryColorDisabled = '#45546e57';
export const cardBackground = '#CECECE20';
export const clientCardBackground = '#ffffff6b';
export const cardBorderRadius = '10px';

export const SideBar = styled.div`
  background: ${backgroundSide};
  height: 100%;
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  h2 {
    color: ${primaryFontColor};
    text-align: center;
    width: 60%;
  }
`;

export const MainScreen = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const Content = styled.div`
  background: ${backgroundContent};
  height: 100%;
  width: 80%;

`