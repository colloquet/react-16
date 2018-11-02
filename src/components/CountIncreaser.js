import React from 'react';

import { CountContext } from '../CountContext';

class CountIncreaser extends React.Component {
  static contextType = CountContext;

  increase = () => {
    this.context.increase();
  }

  render() {
    return (
      <div>Current count: {this.context.count} <button onClick={this.increase}>increase</button></div>
    )
  }
}

export default CountIncreaser;
