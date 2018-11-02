import React from 'react';

export const CountContext = React.createContext({
  count: 0,
  increase: () => {},
});
