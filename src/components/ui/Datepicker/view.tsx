import { WrapperDatePicker } from "./styles"
import { IViewProps } from "./types"

const View = ({ label, value, onChange, name }: IViewProps) => {
  return (
    <WrapperDatePicker>
      <label>{label}</label>
      <input
        type="date"
        value={value}
        onChange={(event) => onChange({ [name]: event.target.value })}
      />
    </WrapperDatePicker>
  )
}

export default View