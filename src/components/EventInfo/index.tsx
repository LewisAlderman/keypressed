import React from 'react';
import { motion } from 'framer-motion';

import { IKeyEventProperties } from '../../settings';

import styles from './styles.module.scss';

interface EventInfoProps {
  state: IKeyEventProperties;
  onAnimationEnd: () => void;
}

const EventInfo = ({ state, onAnimationEnd }: EventInfoProps): JSX.Element => {
  return (
    <motion.div
      layout
      onAnimationEnd={onAnimationEnd}
      className={styles.EventInfo}
      initial={{ opacity: 0, scale: 0.66 }}
      animate={{ opacity: 1, scale: 1, transition: { delay: 0.33 } }}>
      <table>
        <tbody>
          {Object.entries(state).map(([propertyName, propertyValue]) => (
            <tr key={propertyName}>
              <th>{propertyName}</th>
              <td key={String(propertyValue)}>{String(propertyValue)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};

export default EventInfo;
