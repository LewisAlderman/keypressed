import React from 'react';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';

import { useKeyHandler } from '../../hooks/useKeyHandler';

import styles from './styles.module.scss';
import EventInfo from '../EventInfo';

const Body = (): JSX.Element => {
  const [state, set] = useKeyHandler();

  return (
    <div className={styles.Body}>
      <AnimateSharedLayout>
        <motion.h1 layout onClick={() => set(null)}>
          Press on your keyboard
        </motion.h1>
        <AnimatePresence>
          {state && <EventInfo state={state} />}
        </AnimatePresence>
      </AnimateSharedLayout>
    </div>
  );
};

export default Body;
