import React from 'react';

import ErrorBoundary from '../components/ErrorBoundary';
import BuggyCounter from '../components/BuggyCounter';

function ExampleErrorBoundary({ children }) {
  return (
    <div>
      <h1 className="problems">Problem: Buggy component often cause whole app to crash</h1>
      <h1>Use: Error Boundary</h1>

      <ErrorBoundary>
        <h2>With Error Boundary</h2>
        <BuggyCounter />
      </ErrorBoundary>
      <h2>Without Error Boundary</h2>
      <BuggyCounter />
    </div>
  )
}

export default ExampleErrorBoundary