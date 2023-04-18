import { createElement } from 'react';
import { ViewProps } from './types'
import View from './view';

const SubmitButton = ({ children, loading, onClick, disabled }: ViewProps) => {
  const viewProps: ViewProps = {
    children,
    loading,
    onClick,
    disabled
  }

  return createElement(View, viewProps);
};

export default SubmitButton;