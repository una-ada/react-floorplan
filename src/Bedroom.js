import React from 'react';

const Bedroom = props => (
  <div className="Bedroom" id={`bed-${props.bedNum}`}>
    Bedroom {props.bedNum}
  </div>
);

export default Bedroom;
