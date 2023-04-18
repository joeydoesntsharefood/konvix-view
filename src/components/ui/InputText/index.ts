import { createElement } from "react";
import View from "./view";
import { ViewProps } from "./types";

const InputText = ({ label, name, onChange, value }: ViewProps) => {
  return createElement(View, { label, name, onChange, value })
}

export default InputText;