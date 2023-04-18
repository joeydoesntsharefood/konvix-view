import { WrapperCardContent, WrapperContent, WrapperTitleContent } from "./styles";
import { ViewProps } from "./types";

const View = ({ content, title }: ViewProps) => {
  return (
    <WrapperContent>
      <WrapperTitleContent>
        {title}
      </WrapperTitleContent>
      <WrapperCardContent>
        {content}
        
      </WrapperCardContent>
    </WrapperContent>
  );
};

export default View;