import { useState } from "react";
import { Alert } from "./Alert";
import { AlertContext, AlertContextValue } from "./context";

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
    }
  
    return (
      <AlertContext.Provider value={{ alert }}>
        <Alert
          title={title}
          isOpen={isOpen}
          description={description}
          onClose={() => setIsOpen(false)}
        />
        {children}
      </AlertContext.Provider>
    );
  };