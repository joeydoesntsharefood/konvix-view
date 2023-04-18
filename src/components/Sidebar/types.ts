import { content } from "../ContentRender/types";

export interface SidebarItem {
  label: string
  value: content
}

export interface IndexProps {
  currentContent: content
  handleContent(value: content): void;
  handlePage(): void
}

export interface ViewProps extends IndexProps {
  sidebarItems: Array<SidebarItem>
};
