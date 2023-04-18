import { WrapperSubmitButton } from "./styles";
import { ViewProps } from "./types";

const View = ({ children, loading, onClick, disabled } : ViewProps) => {
  return (
    <WrapperSubmitButton>
      <button
        disabled={disabled}
        onClick={onClick}
      >
        {!loading ? children : <>Carregando...</>}
      </button>
    </WrapperSubmitButton>
  )
};

export default View;