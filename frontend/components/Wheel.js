// import React from 'react'

// export default function Wheel(props) {
//   return (
//     <div id="wrapper">
//       <div id="wheel">
//         <div className="cog active" style={{ "--i": 0 }}>B</div>
//         <div className="cog" style={{ "--i": 1 }}></div>
//         <div className="cog" style={{ "--i": 2 }}></div>
//         <div className="cog" style={{ "--i": 3 }}></div>
//         <div className="cog" style={{ "--i": 4 }}></div>
//         <div className="cog" style={{ "--i": 5 }}></div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
//       </div>
//       <div id="keypad">
//         <button id="counterClockwiseBtn" >Counter clockwise</button>
//         <button id="clockwiseBtn">Clockwise</button>
//       </div>
//     </div>
//   )
// }
import { connect } from 'react-redux';
import { moveClockwise, moveCounterClockwise } from '../state/action-creators';
import React from 'react';

function Wheel(props) {
  const { wheelPosition, moveClockwise, moveCounterClockwise } = props;

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
            B
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
  };
};

export default connect(mapStateToProps, { moveClockwise, moveCounterClockwise })(Wheel);
