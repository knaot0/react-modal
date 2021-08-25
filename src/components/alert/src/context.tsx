import { createContext, useContext } from "react";

export type AlertContextValue = {
  alert: () => void;
};

export const AlertContext = createContext<AlertContextValue | null>(null);

export const useAlertContext = () => {
  const context = useContext(AlertContext);

  if (context === null) {
    throw new TypeError("AlertContext is not initialized");
  }

  return context;
};
