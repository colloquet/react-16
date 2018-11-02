import React from 'react';

import { CountContext } from '../CountContext';
import ThemeToggle from '../components/ThemeToggle';
import CountIncreaser from '../components/CountIncreaser';

function ExampleContext() {
  return (
    <div>
      <h1 className="problems">Problem: I want to share some 'global state' with a tree of components</h1>
      <h1>Use: Context</h1>
      <ThemeToggle />

      <CountContext.Consumer>
        {({ count, increase }) => (
          <div>
            Current count: {count} <button onClick={increase}>increase</button>
          </div>
        )}
      </CountContext.Consumer>

      <CountIncreaser />
    </div>
  );
}

export default ExampleContext;
