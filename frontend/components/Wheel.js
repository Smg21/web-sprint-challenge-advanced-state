import { connect } from 'react-redux';
import { moveClockwise, moveCounterClockwise, setSelectedAnswer } from '../state/action-creators';
import React from 'react';

function Wheel(props) {
  const { wheelPosition, moveClockwise, moveCounterClockwise, selectedAnswer, setSelectedAnswer } = props;

  const rotateWheel = (direction) => {
    if (direction === 'clockwise') {
      moveClockwise();
    } else if (direction === 'counterclockwise') {
      moveCounterClockwise();
    }
  };

  return (
    <div id="wrapper">
      <div id="wheel">
        {[0, 1, 2, 3, 4, 5].map((index) => (
          <div
            key={index}
            className={`cog ${index === wheelPosition ? 'active' : ''}`}
            style={{ '--i': index }}
          >
            {index === wheelPosition ? 'B' : null}
          </div>
        ))}
      </div>
      <div id="keypad">
        <button
          id="counterClockwiseBtn"
          onClick={() => rotateWheel('counterclockwise')}
        >
          Counter clockwise
        </button>
        <button id="clockwiseBtn" onClick={() => rotateWheel('clockwise')}>
          Clockwise
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    wheelPosition: state.wheel,
    selectedAnswer: state.selectedAnswer,
  };
};

export default connect(mapStateToProps, { moveClockwise, moveCounterClockwise, setSelectedAnswer })(Wheel);
