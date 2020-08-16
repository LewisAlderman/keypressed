import { useState, useEffect } from 'react';
import { IKeyEventProperties, EVENT_KEYS } from '../settings';

export function useKeyHandler() {
  const [state, set] = useState<IKeyEventProperties>(null);

  const handleKey = (e: KeyboardEvent) => {
    const desiredInfo = EVENT_KEYS.reduce(
      (output, key) => ({ ...output, [key]: e[key] }),
      {},
    );
    set(desiredInfo);
  };

  useEffect(function setupKeyHandler() {
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  return [state, set];
}
