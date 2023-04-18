import { pages } from "../../constants";
import { content } from "../ContentRender/types";

export interface IndexProps {
  currentPage: pages
  currentContent: content
  handlePage(value: pages): void
  handleContent(value: content): void
}