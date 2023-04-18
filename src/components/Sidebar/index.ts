import { createElement } from "react";
import View from "./view";
import { IndexProps, ViewProps } from "./types";
import { SidebarItems as sidebarItems } from "./constants";

const SideBar = ({ handleContent, currentContent, handlePage }: IndexProps) => {
  const viewProps: ViewProps = {
    handleContent,
    sidebarItems,
    currentContent,
    handlePage
  };

  return createElement(View, viewProps);
}

export default SideBar;