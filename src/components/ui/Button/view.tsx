import { WrapperButton } from "./styles";
import { ViewProps } from "./types";

const View = ({ children, onClick, disabled } : ViewProps) => {
  return (
    <WrapperButton>
      <button
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    </WrapperButton>
  )
};

export default View;