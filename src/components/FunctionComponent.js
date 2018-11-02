import React from 'react'

let count = 0;

function FunctionComponent() {
  count++;

  return (
    <div
      style={{
        padding: '1rem',
        background: '#f5f6f7',
        marginTop: '1rem',
      }}
    >
      Normal function component<br />
      Render count: {count}
    </div>
  )
}

export default FunctionComponent
