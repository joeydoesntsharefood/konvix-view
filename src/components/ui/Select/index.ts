import { createElement } from "react";
import View from "./view";
import { Props } from "./types";

const Select = ({ label, name, onChange, options, value }: Props) => {
  const viewProps: Props = {
    label,
    name,
    onChange,
    options,
    value
  }

  return createElement(View, viewProps);
};

export default Select;