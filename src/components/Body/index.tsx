import React from 'react';

import styles from './styles.module.scss';
import { useKeyHandler } from '../../hooks/useKeyHandler';
import { IKeyEventProperties } from '../../settings';

interface EventInfoProps {
  state: IKeyEventProperties;
}

const EventInfo = ({ state }: EventInfoProps) => {
  return (
    <div>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
};

const Body = (): JSX.Element => {
  const state = useKeyHandler();

  return (
    <div className={styles.Body}>
      <h1>Press on your keyboard</h1>
      <EventInfo state={state} />
    </div>
  );
};

export default Body;
