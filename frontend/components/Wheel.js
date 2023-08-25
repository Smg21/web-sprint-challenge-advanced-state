
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { moveClockwise, moveCounterClockwise } from '../state/action-creators';

function Wheel() {
  const dispatch = useDispatch();
  const wheelPosition = useSelector(state => state.wheel); // Get the wheel position from the Redux store

  const handleMoveClockwise = () => {
    dispatch(moveClockwise());
  };

  const handleMoveCounterClockwise = () => {
    dispatch(moveCounterClockwise());
  };

  return (
    <div id="wrapper">
      <div id="wheel">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className={`cog ${wheelPosition === index ? 'active' : ''}`}
            style={{ '--i': index }}
          >
            {wheelPosition === index ? 'B' : null}
          </div>
        ))}
      </div>
      <div id="keypad">
        <button onClick={handleMoveCounterClockwise}>Counter clockwise</button>
        <button onClick={handleMoveClockwise}>Clockwise</button>
      </div>
    </div>
  );
}

export default Wheel;
