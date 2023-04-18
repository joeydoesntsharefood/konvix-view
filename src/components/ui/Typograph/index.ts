import { createElement } from "react"
import { Props } from "./types";
import View from "./view";

const Typograph = ({ children }: Props) => {
  const viewProps: Props = {
    children
  };

  return createElement(View, viewProps);
};

export default Typograph;