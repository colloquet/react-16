import React from 'react';

import FunctionComponent from '../components/FunctionComponent';
import FunctionComponentWithMemo from '../components/FunctionComponentWithMemo';

class ExampleMemo extends React.Component {
  state = {
    count: 0,
  }

  debug = () => {
    console.log('asd')
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1 className="problems">Problem: Function components re-render frequently</h1>
        <h1>Use: React.memo</h1>
        Count: {count} <button onClick={() => this.setState(state => ({ count: state.count + 1 }))}>increase</button>

        <FunctionComponent />
        <FunctionComponentWithMemo debug={this.debug} />
      </div>
    )
  }
}

export default ExampleMemo;
