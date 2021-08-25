/**
 * @file ポータルのHOC
 */

import { createPortal } from "react-dom";
import { useMount } from "./use-mounted";

export const withPortal =
  <T extends {}>(Component: React.FC<T>): React.FC<T> =>
  (props: T) => {
    const isMounted = useMount();

    if (!isMounted) return null;
    return createPortal(<Component {...props} />, document.body);
  };
