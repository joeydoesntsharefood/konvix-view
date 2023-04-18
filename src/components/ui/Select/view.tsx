import { WrapperSelect } from "./styles";
import { Props } from "./types";

const View = ({ name, onChange, options, value, label }: Props) => {
  return (
    <WrapperSelect>
      <label htmlFor={name}>{label}</label>
      <select id={name} value={value} onChange={e => onChange({ [name]: e.target.value })}>
        {options && options?.map((value) => 
          <option value={value?.value}>{value?.label}</option>
        )}
      </select>
    </WrapperSelect>
  );
};

export default View;