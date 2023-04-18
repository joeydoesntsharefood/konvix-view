import * as Toast from '@radix-ui/react-toast';
import { ViewProps } from './types';
import { WrapperToast } from './styles';

const View = ({ open, setOpen, text, title }: ViewProps) => {
  return (
    <WrapperToast>
      <Toast.Provider swipeDirection="right">
        <Toast.Root className="ToastRoot" open={open} onOpenChange={setOpen}>
          <Toast.Title className="ToastTitle">{title}</Toast.Title>
          <Toast.Description asChild>
            {text}          
          </Toast.Description>
        </Toast.Root>
        <Toast.Viewport className="ToastViewport" />
      </Toast.Provider>
    </WrapperToast>
  );
};

export default View;
