import { createElement } from "react";
import { pages } from "../../constants";
import { IndexProps } from "./types";
import Login from "../forms/Login";
import Register from "../forms/Register";
import SideBar from "../Sidebar";

const ComponentRender = ({ currentPage, handlePage, handleContent, currentContent }: IndexProps) => {
  const pages: Record<pages, { element: any, props: any }>  = {
    login: {
      element: Login,
      props: {
        handlePage: () => handlePage('register'),
        toDashboard: () => handlePage('dashboard')
      }
    },
    register: {
      element: Register,
      props: {
        handlePage: () => handlePage('login'),
      }
    },
    dashboard: {
      element: SideBar,
      props: {
        handleContent,
        currentContent,
        handlePage: () => handlePage('login')
      }
    }
  };

  return createElement(pages[currentPage].element, pages[currentPage].props)
};

export default ComponentRender;