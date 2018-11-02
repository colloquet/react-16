import React from 'react'

let count = 0;

function FunctionComponentWithMemo() {
  count++;

  return (
    <div
      style={{
        padding: '1rem',
        background: '#f5f6f7',
        marginTop: '1rem',
      }}
    >
      Function component with memo<br />
      Render count: {count}
    </div>
  )
}

export default React.memo(FunctionComponentWithMemo)
