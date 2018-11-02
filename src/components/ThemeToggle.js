import React from 'react';

import { ThemeContext } from '../ThemeContext';

function ThemeToggle() {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <div>
          Current theme: {theme}
          {' '}
          <button onClick={toggleTheme}>Toggle theme</button>
        </div>
      )}
    </ThemeContext.Consumer>
  )
}

export default ThemeToggle
