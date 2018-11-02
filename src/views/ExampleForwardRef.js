import React from 'react';

import FancyInput from '../components/FancyInput';

class ExampleForwardRef extends React.Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  render() {
    return (
      <div>
        <h1 className="problems">Problem: Cannot register ref directly to the component unless inputRef / innerRef / $ref</h1>
        <h1>Use: Forward Ref</h1>

        <FancyInput ref={this.inputRef} />
        <button onClick={() => this.inputRef.current.focus()}>Focus</button>
      </div>
    );
  }
}

export default ExampleForwardRef;
