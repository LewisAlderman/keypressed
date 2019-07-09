import { useState, useEffect } from "react";

function useKeypress() {
  const [eventInfo, set] = useState(null);

  const handleKeypress = (e) => {
    set(e);
  };

  const eventType = "keydown";
  const callback = handleKeypress;

  useEffect(() => {
    document.addEventListener(eventType, callback);

    return () => document.removeEventListener(eventType, callback);
  }, [callback]);

  return eventInfo;
}

export default useKeypress;
