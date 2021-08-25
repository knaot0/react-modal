import { useState } from "react";
import { Alert, AlertProps } from "./Alert";
import { AlertContext, AlertContextValue } from "./context";

let resolve: (value: void | PromiseLike<void>) => void;

export const AlertProvider: React.FC = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const alert: AlertContextValue['alert'] = ({
      title,
      description
    }) => {
      setIsOpen(true);
      setTitle(title);
      setDescription(description);

      return new Promise<void>(_resolve => {
        resolve = _resolve;
      })
    }

    const handleClose: AlertProps['onClose'] = () => {
      setIsOpen(false)
      resolve();
    }
  
    return (
      <AlertContext.Provider value={{ alert }}>
        <Alert
          title={title}
          isOpen={isOpen}
          description={description}
          onClose={handleClose}
        />
        {children}
      </AlertContext.Provider>
    );
  };