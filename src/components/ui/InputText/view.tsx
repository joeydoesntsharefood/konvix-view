import { WrapperInputText } from "./styles";
import { ViewProps } from "./types";

const View = ({ name, onChange, value, label }: ViewProps) => {
  return (
    <WrapperInputText>
      <label
        htmlFor={name}
      >
        {label}
      </label>
      
      <input
        id={name}
        onChange={e => onChange({ [name]: e.target.value})}
        value={value}
      />
    </WrapperInputText>
  )
};

export default View;