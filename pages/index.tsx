import React from 'react';
import Head from 'next/head';
import { useKeyHandler } from '../src/hooks/useKeyHandler';

export default function Home() {
  const state = useKeyHandler();

  return (
    <div>
      <Head>
        <title>WhichKey</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Press a key</h1>

      <div>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    </div>
  );
}
