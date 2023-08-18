// import { combineReducers } from 'redux';
// import {
//   MOVE_CLOCKWISE,
//   MOVE_COUNTERCLOCKWISE,
//   SET_QUIZ,
//   SET_INFO_MESSAGE,
//   SET_NEW_QUESTION,
//   SET_NEW_TRUE_ANSWER,
//   SET_NEW_FALSE_ANSWER,
//   SELECT_ANSWER, 
// } from './action-creators';

// const initialWheelState = 0;

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

// const initialQuizState = null;
// function quiz(state = initialQuizState, action) {
//   switch (action.type) {
//     case SET_QUIZ:
//       return action.payload;
//     default:
//       return state;
//   }
// }

// const initialSelectedAnswerState = null;
// function selectedAnswer(state = initialSelectedAnswerState, action) {
//   switch (action.type) {
//     case SELECT_ANSWER:
//       return action.payload;
//     default:
//       return state;
//   }
// }

// const initialMessageState = '';
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
// };
// function form(state = initialFormState, action) {
//   switch (action.type) {
//     case SET_NEW_QUESTION:
//       return { ...state, newQuestion: action.payload };
//     case SET_NEW_TRUE_ANSWER:
//       return { ...state, newTrueAnswer: action.payload };
//     case SET_NEW_FALSE_ANSWER:
//       return { ...state, newFalseAnswer: action.payload };
//     default:
//       return state;
//   }
// }

// export default combineReducers({
//   wheel,
//   quiz,
//   selectedAnswer,
//   infoMessage,
//   form,
// });

import { combineReducers } from 'redux';
import {
  MOVE_CLOCKWISE,
  MOVE_COUNTERCLOCKWISE,
  SET_QUIZ,
  SET_INFO_MESSAGE,
  SELECT_ANSWER,
  SET_NEW_QUESTION,
  SET_NEW_TRUE_ANSWER,
  SET_NEW_FALSE_ANSWER,
  CREATE_QUIZ_SUCCESS,
} from './action-types';

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
      return action.payload !== undefined ? action.payload : state;
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
  switch (action.type) {
    case SET_NEW_QUESTION:
      return { ...state, newQuestion: action.payload };
    case SET_NEW_TRUE_ANSWER:
      return { ...state, newTrueAnswer: action.payload };
    case SET_NEW_FALSE_ANSWER:
      return { ...state, newFalseAnswer: action.payload };
    default:
      return state;
  }
}

export default combineReducers({
  wheel,
  quiz,
  selectedAnswer,
  infoMessage,
  form,
});
