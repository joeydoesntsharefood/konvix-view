import { createElement } from 'react';
import { ViewProps } from './types'
import View from './view';

const Button = ({ children, onClick, disabled }: ViewProps) => {
  const viewProps: ViewProps = {
    children,
    onClick,
    disabled,
  }

  return createElement(View, viewProps);
};

export default Button;