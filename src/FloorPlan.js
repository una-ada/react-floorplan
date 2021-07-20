import React from 'react';
import Bedroom from './Bedroom';
import Kitchen from './Kitchen';
import LivingRoom from './LivingRoom';

const FloorPlan = props => (
  <div className="FloorPlan">
    <Bedroom bedNum={1} />
    <Kitchen />
    <LivingRoom />
    <Bedroom bedNum={2} />
    <Bedroom bedNum={3} />
  </div>
);

export default FloorPlan;
