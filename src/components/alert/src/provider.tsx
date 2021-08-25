import { useState } from "react";
import { Alert } from "./Alert";
import { AlertContext } from "./context";

export const AlertProvider: React.FC = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <AlertContext.Provider value={{ alert: () => setIsOpen(true) }}>
        <Alert
          isOpen={isOpen}
          onClose={() => setIsOpen(!isOpen)}
          description="エラーが発生しました"
        />
        {children}
      </AlertContext.Provider>
    );
  };