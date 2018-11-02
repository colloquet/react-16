import React, { useState } from 'react';

function ExamplePortal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <h1 className="problems">Problem: I need to wrap multiple components in a root node to render</h1>
      <h1>Use: Fragments</h1>

      <button onClick={() => setIsLoggedIn(true)}>Login</button>

      <div
        className="navbar"
        style={{
          marginTop: '1rem',
        }}
      >
        <strong>MioTech</strong>
        {isLoggedIn ? (
          <>
            <div style={{ marginLeft: '1rem' }}>NavItem 1</div>
            <div style={{ marginLeft: '1rem' }}>NavItem 2</div>
            <div style={{ marginLeft: '1rem' }}>NavItem 3</div>
          </>
        ) : (
          <>
            <div style={{ marginLeft: '1rem' }}>NavItem 4</div>
            <div style={{ marginLeft: '1rem' }}>NavItem 5</div>
          </>
        )}
      </div>
    </div>
  );
}

export default ExamplePortal;
