import React from 'react';
import { useDispatch } from 'react-redux';
import { moveClockwise, moveCounterClockwise } from '../state/action-creators';

function Wheel() {
  const dispatch = useDispatch();

  const handleMoveClockwise = () => {
    dispatch(moveClockwise());
  };

  const handleMoveCounterClockwise = () => {
    dispatch(moveCounterClockwise());
  };

  return (
    <div>
      <h2>Wheel</h2>
      <button onClick={handleMoveClockwise}>Move Clockwise</button>
      <button onClick={handleMoveCounterClockwise}>Move Counterclockwise</button>
    </div>
  );
}

export default Wheel;
