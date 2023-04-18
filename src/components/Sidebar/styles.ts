import styled from "styled-components";
import { backgroundContent, backgroundSide, primaryFontColor } from "../../globals";

export const WrapperSideBar = styled.div`
  width: 100%;
  height: 100%;

  .sidebar-item {
    background: ${backgroundSide};
    padding-top: 10px;
    padding-bottom: 10px;

    :hover {
      background: ${backgroundContent};
      cursor: pointer;
    }
  }

  .sidebar-item.active {
    background: ${backgroundContent};
  }
`

export const SidebarItem = styled.p`
  font-size: 20px;
  padding-left: 10px;
  color: ${primaryFontColor};
  margin-bottom: 4px;
`