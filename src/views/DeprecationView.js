import React from 'react';

function DeprecationView() {
  return (
    <div>
      <h2>The following lifecycles will be deprecated as of React 17:</h2>
      <ul style={{ fontSize: '1.2rem' }}>
        <li>componentWillMount -> UNSAFE_componentWillMount</li>
        <li>componentWillReceiveProps -> UNSAFE_componentWillReceiveProps</li>
        <li>componentWillUpdate -> UNSAFE_componentWillUpdate</li>
      </ul>
    </div>
  )
}

export default DeprecationView
