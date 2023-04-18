import * as Switch from '@radix-ui/react-switch';
import { WrapperSwitch } from './styles';
import { ViewProps } from './types';

const View = ({ label, onChange, value, name }: ViewProps) => {
  return (
    <WrapperSwitch>
      <label className="Label" htmlFor="airplane-mode" style={{ paddingRight: 15 }}>
        {label}
      </label>
      <Switch.Root className="SwitchRoot" id="airplane-mode" onCheckedChange={value => onChange({ [name]: value })} value={value}>
        <Switch.Thumb className="SwitchThumb" />
      </Switch.Root>
    </WrapperSwitch>
  )
};

export default View;