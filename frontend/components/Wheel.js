import React from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { moveClockwise, moveCounterClockwise } from '../state/action-creators';

const Wheel = () => {
  const dispatch = useDispatch();
  const wheelPosition = useSelector(state => state.wheel) + 1;

  const handleMoveClockwise = () => {
    dispatch(moveClockwise());
  };
  
  const handleMoveCounterClockwise = () => {
    dispatch(moveCounterClockwise());
  };

  const cogElements = Array.from({ length: 6 }, (_, index) => (
    <div
      key={index}
      className={`cog ${wheelPosition === index + 1 ? 'active' : ''}`}
      style={{ '--i': index }}
    >
      {wheelPosition === index + 1 ? 'B' : null}
    </div>
  ));

  return (
    <div id="wrapper">
      <div id="wheel">{cogElements}</div>
      <div id="keypad">
        <button onClick={handleMoveCounterClockwise}>Counter clockwise</button>
        <button onClick={handleMoveClockwise}>Clockwise</button>
      </div>
    </div>
  );
};

export default Wheel;
