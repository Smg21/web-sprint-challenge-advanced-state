// ❗ You don't need to add extra reducers to achieve MVP
// import { combineReducers } from 'redux'
// import {
//   MOVE_CLOCKWISE,
//   MOVE_COUNTERCLOCKWISE, 
//   SET_QUIZ,
//   SELECT_ANSWER,
//   SET_INFO_MESSAGE
// } from './action-creators';

// const initialWheelState = 0

// function wheel(state = initialWheelState, action) {
//   switch (action.type) {
//     case MOVE_CLOCKWISE:
//       return (state + 1) % 6;
//     case MOVE_COUNTERCLOCKWISE:
//       return (state + 5) % 6;
//     default:
//       return state;
//   }
// }

// const initialQuizState = null
// function quiz(state = initialQuizState, action) {
//   switch (action.type) {
//     case SET_QUIZ: 
//       return action.payload;
//     default:
//       return state;
//   }
// }

// const initialSelectedAnswerState = null; // Make sure this is set to a valid initial value
// function selectedAnswer(state = initialSelectedAnswerState, action) {
//   switch (action.type) {
//     case SELECT_ANSWER:
//       return action.payload;
//     default:
//       return state;
//   }
// }

// const initialMessageState = ''
// function infoMessage(state = initialMessageState, action) {
//   switch (action.type) {
//     case SET_INFO_MESSAGE:
//       return action.payload;
//     default:
//       return state;
//   }
// }

// const initialFormState = {
//   newQuestion: '',
//   newTrueAnswer: '',
//   newFalseAnswer: '',
// }
// function form(state = initialFormState, action) {
//   return state
// }

// export default combineReducers({
//   wheel,
//   quiz,
//   selectedAnswer,
//   infoMessage,
//   form,
// });
// import { combineReducers } from 'redux';
// import {
//   MOVE_CLOCKWISE,
//   MOVE_COUNTERCLOCKWISE,
//   SET_QUIZ,
//   SELECT_ANSWER,
//   SET_INFO_MESSAGE,
// } from './action-creators';

import { combineReducers } from 'redux';
import {
  MOVE_CLOCKWISE,
  MOVE_COUNTERCLOCKWISE,
  SET_QUIZ,
  SELECT_ANSWER,
  SET_INFO_MESSAGE,
} from './action-creators';

const initialWheelState = 0;

function wheel(state = initialWheelState, action) {
  switch (action.type) {
    case MOVE_CLOCKWISE:
      return (state + 1) % 6;
    case MOVE_COUNTERCLOCKWISE:
      return (state + 5) % 6;
    default:
      return state;
  }
}

const initialQuizState = null;
function quiz(state = initialQuizState, action) {
  switch (action.type) {
    case SET_QUIZ:
      return action.payload;
    default:
      return state;
  }
}

const initialSelectedAnswerState = null;
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch (action.type) {
    case SELECT_ANSWER:
      return action.payload;
    default:
      return state; 
  }
}

const initialMessageState = '';
function infoMessage(state = initialMessageState, action) {
  switch (action.type) {
    case SET_INFO_MESSAGE:
      return action.payload;
    default:
      return state;
  }
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
};
function form(state = initialFormState, action) {
  return state;
}
export default combineReducers({
  wheel,
  quiz,
  selectedAnswer,
  infoMessage,
  form,
});
// export default combineReducers({
//   wheel,
//   quiz,
//   selectedAnswer,
//   infoMessage,
//   form,
// });
