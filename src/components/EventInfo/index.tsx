import React from 'react';
import { motion } from 'framer-motion';

import { IKeyEventProperties } from '../../settings';

import styles from './styles.module.scss';

interface EventInfoProps {
  state: IKeyEventProperties;
}

const EventInfo = ({ state }: EventInfoProps): JSX.Element => {
  return (
    <motion.div
      layout
      className={styles.EventInfo}
      transition={{ delay: 0.2 }}
      initial={{ opacity: 0, scale: 0.66 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.66 }}>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </motion.div>
  );
};

export default EventInfo;
