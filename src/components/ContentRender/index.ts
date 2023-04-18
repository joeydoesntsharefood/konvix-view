import { createElement } from "react";
import { IndexProps, SidebarItem, ViewProps, content } from "./types";
import Home from "../../views/Home";
import View from "./view";
import ReportsSales from "../../views/ReportsSales";
import Client from "../../views/Client";
import Sale from "../../views/Sale";

const ContentRender = ({ content }: IndexProps) => {
  const contents: Record<content, SidebarItem> = {
    clients: {
      element: Client,
      title: 'Clientes'
    },
    sales: {
      element: ReportsSales,
      title: 'Relatório de vendas'
    },
    sale: {
      element: Sale,
      title: 'Vendas'
    }
  };

  const viewProps: ViewProps = {
    content: createElement(contents[content].element),
    title: contents[content].title
  };

  return createElement(View, viewProps);
};

export default ContentRender;