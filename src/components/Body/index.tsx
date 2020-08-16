import React from 'react';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';

import { useKeyHandler } from '../../hooks/useKeyHandler';

import styles from './styles.module.scss';
import EventInfo from '../EventInfo';

const Body = (): JSX.Element => {
  const [state, set] = useKeyHandler();

  return (
    <div className={styles.Body}>
      <motion.div
        /** background */ className={styles.bg}
        animate={{
          opacity: state ? 1 : 0,
          scale: state ? 1 : 1.2,
        }}
      />

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
