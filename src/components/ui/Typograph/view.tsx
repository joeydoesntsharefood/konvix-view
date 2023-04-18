import { WrapperTypograph } from "./style";
import { Props } from "./types";

const View = ({ children }: Props) => {
  return (
    <WrapperTypograph>
      {children}
    </WrapperTypograph>
  )
};

export default View;