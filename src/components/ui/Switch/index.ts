import { createElement } from "react";
import View from "./view";
import { IndexProps } from "./types";

const Switch = ({ label, onChange, value, name }: IndexProps) => {
  return createElement(View, { value: value ? 'on' : 'off', label, onChange, name });
};

export default Switch;