import { createElement } from "react";
import { ViewProps } from "./types";
import View from "./view";

const Toast = ({ open, setOpen, text, title }: ViewProps) => {
  return createElement(View, { open, setOpen, text, title });
};

export default Toast;