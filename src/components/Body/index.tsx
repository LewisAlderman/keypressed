import React from 'react';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';

import { useKeyHandler } from '../../hooks/useKeyHandler';

import styles from './styles.module.scss';
import EventInfo from '../EventInfo';

const svg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    aria-hidden="true">
    <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 001.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 00-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 005.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
  </svg>
);

const Body = (): JSX.Element => {
  const [state, set] = useKeyHandler();

  return (
    <div className={styles.Body}>
      <motion.div
        /** background */ className={styles.bg}
        initial={{
          opacity: 0,
          scale: 1.2,
        }}
        animate={{
          opacity: state ? 1 : 0,
          scale: state ? 1 : 1.2,
        }}
      />

      <AnimateSharedLayout>
        <motion.div layout className={styles.text}>
          {/**
           * Header
           */}
          <motion.h1 layout onClick={() => set(null)}>
            Press on your keyboard
          </motion.h1>

          {/**
           * SubHeading
           */}
          <h6>
            <AnimatePresence exitBeforeEnter initial={false}>
              {!state && (
                <motion.span
                  key="h61"
                  transition={{
                    duration: 0.5,
                    delay: 2,
                  }}
                  initial={{
                    opacity: 1,
                    y: 0,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: 20,
                  }}>
                  Visualize the browser <strong>KeyboardEvent</strong>
                </motion.span>
              )}
              {state && (
                <motion.a
                  key="h62"
                  href="https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent"
                  initial={{
                    opacity: 0,
                    y: -10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -20,
                  }}
                  transition={{
                    duration: 0.33,
                  }}
                  onAnimationComplete={() => null}
                  target="_blank"
                  rel="noopener noreferrer">
                  {svg}
                  View MDN docs for KeyboardEvent
                </motion.a>
              )}
            </AnimatePresence>
          </h6>
          {state && (
            <motion.div
              className={styles.key}
              initial={{ opacity: 0 }}
              animate={{ opacity: state ? 1 : 0 }}
              transition={{ delay: 3 }}>
              <span>{JSON.stringify(state?.key)}</span>
            </motion.div>
          )}
        </motion.div>

        {/**
         * EVENT INFO
         */}
        <AnimatePresence>
          {state && <EventInfo state={state} />}
        </AnimatePresence>
      </AnimateSharedLayout>
    </div>
  );
};

export default Body;
