import { createElement } from "react";
import { ViewProps } from "./types";
import View from "./view";

const Home = () => {
  const viewProps: ViewProps = {};

  return createElement(View, viewProps);
};

export default Home;