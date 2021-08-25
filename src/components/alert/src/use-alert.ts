import { useAlertContext } from "./context";

export const useAlert = () => {
    const { alert } = useAlertContext();
    return alert;
}
  