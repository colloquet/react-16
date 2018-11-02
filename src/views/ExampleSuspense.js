import React, { lazy, Suspense, useState } from 'react';

const TestComponent = lazy(() => import('../components/TestComponent'));

function ExampleSuspense() {
  const [showComponent, setShowComponent] = useState(false)

  return (
    <div>
      <h1 className="problems">Problem: Bundled JS is too big</h1>
      <h1>Use: Suspense</h1>
      <button onClick={() => setShowComponent(!showComponent)}>Toggle component</button>
      <div style={{ margin: '1rem 0' }}>
        <Suspense fallback={<div>loading...</div>}>
          {showComponent && <TestComponent />}
        </Suspense>
      </div>
    </div>
  );
}

export default ExampleSuspense;
