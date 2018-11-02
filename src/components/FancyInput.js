import React from 'react';

function FancyInput(props, ref) {
  return (
    <div>
      <label>Fancy input with label!</label>
      <input ref={ref} {...props} type="text" />
    </div>
  );
}

export default React.forwardRef(FancyInput);
