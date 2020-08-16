import React from 'react';
import Head from 'next/head';
import { useKeyHandler } from '../src/hooks/useKeyHandler';

export default function Home() {
  const state = useKeyHandler();

  return (
    <div>
      <Head>
        <title>WhichKey</title>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta
          name="description"
          content="Which key pressed? Keyboard event info visualizer"
        />
        <meta
          name="keywords"
          content="Keyboard key press event javascript info"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link
          href="images/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="images/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="images/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB" />
      </Head>

      <h1>Press a key</h1>

      <div>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    </div>
  );
}
