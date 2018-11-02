import React, { useState } from 'react';

function BuggyCounter() {
  const [count, setCount] = useState(0);

  if (count > 5) {
    throw new Error('I crashed!')
  }

  return (
    <div>
      Count: {count} <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

export default BuggyCounter
