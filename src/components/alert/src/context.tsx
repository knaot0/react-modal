import { createContext, useContext } from "react";

export type AlertContextValue = {
  alert: (options: { title: string; description: string }) => void;
};

export const AlertContext = createContext<AlertContextValue | null>(null);

export const useAlertContext = () => {
  const context = useContext(AlertContext);

  if (context === null) {
    throw new TypeError("AlertContext is not initialized");
  }

  return context;
};
