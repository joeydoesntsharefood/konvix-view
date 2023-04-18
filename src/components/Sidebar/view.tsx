import { SidebarItem, WrapperSideBar } from "./styles";
import { ViewProps } from "./types";

const View = ({ handleContent, sidebarItems, currentContent, handlePage }: ViewProps) => {
  return (
    <WrapperSideBar>
      {
        sidebarItems
          .map((value) =>
            <SidebarItem
              className={`sidebar-item${currentContent === value?.value ? ' active' : ''}`}
              onClick={() => handleContent(value?.value)}
            >
              {value?.label}
            </SidebarItem>
          )
      }

      <SidebarItem
        className={`sidebar-item`}
        onClick={handlePage}
      >
        Sair
      </SidebarItem>
    </WrapperSideBar>
  )
};

export default View;