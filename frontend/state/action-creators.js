// export const MOVE_CLOCKWISE = 'MOVE_CLOCKWISE';
// export const MOVE_COUNTERCLOCKWISE = 'MOVE_COUNTERCLOCKWISE';
// export const SET_QUIZ = 'SET_QUIZ';
// export const CREATE_QUIZ = 'CREATE_QUIZ';
// export const SET_INFO_MESSAGE = 'SET_INFO_MESSAGE';
// export const CREATE_QUIZ_SUCCESS = 'CREATE_QUIZ_SUCCESS';
// export const SELECT_ANSWER = 'SELECT_ANSWER';
// export const SET_NEW_QUESTION = 'SET_NEW_QUESTION';
// export const SET_NEW_TRUE_ANSWER = 'SET_NEW_TRUE_ANSWER';
// export const SET_NEW_FALSE_ANSWER = 'SET_NEW_FALSE_ANSWER';

// export function moveClockwise() {
//   return { type: MOVE_CLOCKWISE };
// }

// export function moveCounterClockwise() {
//   return { type: MOVE_COUNTERCLOCKWISE };
// }

// export function setQuiz(quiz) {
//   return {
//     type: SET_QUIZ,
//     payload: quiz,
//   };
// }

// export function selectAnswer(answerId) {
//   return {
//     type: SELECT_ANSWER,
//     payload: answerId,
//   };
// }

// export function setNewQuestion(newQuestion) {
//   return {
//     type: SET_NEW_QUESTION,
//     payload: newQuestion,
//   };
// }

// export function setNewTrueAnswer(newTrueAnswer) {
//   return {
//     type: SET_NEW_TRUE_ANSWER,
//     payload: newTrueAnswer,
//   };
// }

// export function setNewFalseAnswer(newFalseAnswer) {
//   return {
//     type: SET_NEW_FALSE_ANSWER,
//     payload: newFalseAnswer,
//   };
// }

// export function createQuiz(newQuizData) {
//   return async function (dispatch) {
//     try {
//       const response = await fetch('http://localhost:9000/api/quiz/new', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newQuizData),
//       });

//       const newQuiz = await response.json();
//       dispatch(createQuizSuccess(newQuiz));
//     } catch (error) {
//       console.error('Error creating quiz:', error);
//     }
//   };
// }

// export function createQuizSuccess(newQuiz) {
//   return {
//     type: CREATE_QUIZ_SUCCESS,
//     payload: newQuiz,
//   };
// }

// export function setInfoMessage(message) {
//   return {
//     type: SET_INFO_MESSAGE,
//     payload: message,
//   };
// }

// export function fetchQuizSuccess(quiz) {
//   return {
//     type: SET_QUIZ,
//     payload: quiz,
//   };
// }

// export function fetchQuiz() {
//   return async function (dispatch) {
//     try {
//       dispatch(setQuiz(null));

//       const response = await fetch('http://localhost:9000/api/quiz/next');
//       const quiz = await response.json();

//       dispatch(fetchQuizSuccess(quiz));
//     } catch (error) {
//       console.error('Error fetching quiz:', error);
//     }
//   };
// }

// export function postAnswerSuccess(message) {
//   return {
//     type: SET_INFO_MESSAGE,
//     payload: message,
//   };
// }

// export function postAnswer(answerData) { 
//   return async function (dispatch) {
//     try {
//       const response = await fetch('http://localhost:9000/api/quiz/answer', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(answerData),
//       });

//       const result = await response.json();
//       dispatch(postAnswerSuccess(result.message));

//       dispatch(fetchQuiz());
//     } catch (error) {
//       console.error('Error posting answer:', error);
//     }
//   };
// }


export const MOVE_CLOCKWISE = 'MOVE_CLOCKWISE';
export const MOVE_COUNTERCLOCKWISE = 'MOVE_COUNTERCLOCKWISE';
export const SET_QUIZ = 'SET_QUIZ';
export const SET_INFO_MESSAGE = 'SET_INFO_MESSAGE';
export const SELECT_ANSWER = 'SELECT_ANSWER';
export const SET_NEW_QUESTION = 'SET_NEW_QUESTION';
export const SET_NEW_TRUE_ANSWER = 'SET_NEW_TRUE_ANSWER';
export const SET_NEW_FALSE_ANSWER = 'SET_NEW_FALSE_ANSWER';
export const CREATE_QUIZ_SUCCESS = 'CREATE_QUIZ_SUCCESS';

export function moveClockwise() {
  return { type: MOVE_CLOCKWISE };
}

export function moveCounterClockwise() {
  return { type: MOVE_COUNTERCLOCKWISE };
}

export function setQuiz(quiz) {
  return {
    type: SET_QUIZ,
    payload: quiz,
  };
}

export function selectAnswer(answerId) {
  return {
    type: SELECT_ANSWER,
    payload: answerId,
  };
}

export function setNewQuestion(newQuestion) {
  return {
    type: SET_NEW_QUESTION,
    payload: newQuestion,
  };
}

export function setNewTrueAnswer(newTrueAnswer) {
  return {
    type: SET_NEW_TRUE_ANSWER,
    payload: newTrueAnswer,
  };
}

export function setNewFalseAnswer(newFalseAnswer) {
  return {
    type: SET_NEW_FALSE_ANSWER,
    payload: newFalseAnswer,
  };
}

export function createQuiz(newQuizData) {
  return async function (dispatch) {
    try {
      const response = await fetch('http://localhost:9000/api/quiz/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newQuizData),
      });

      if (response.status === 201) {
        const newQuiz = await response.json();
        dispatch(createQuizSuccess(newQuiz));
      } else {
        const error = await response.json();
        console.error('Error creating quiz:', error);
      }
    } catch (error) {
      console.error('Error creating quiz:', error);
    }
  };
}

export function createQuizSuccess(newQuiz) {
  return {
    type: CREATE_QUIZ_SUCCESS,
    payload: newQuiz,
  };
}

export function setInfoMessage(message) {
  return {
    type: SET_INFO_MESSAGE,
    payload: message,
  };
}

export function fetchQuizSuccess(quiz) {
  return {
    type: SET_QUIZ,
    payload: quiz,
  };
}

export function fetchQuiz() {
  return async function (dispatch) {
    try {
      dispatch(setQuiz(null));

      const response = await fetch('http://localhost:9000/api/quiz/next');
      const quiz = await response.json();

      dispatch(fetchQuizSuccess(quiz));
    } catch (error) {
      console.error('Error fetching quiz:', error);
    }
  };
}

export function postAnswerSuccess(message) {
  return {
    type: SET_INFO_MESSAGE,
    payload: message,
  };
}

export function postAnswer(answerData) {
  return async function (dispatch) {
    try {
      const response = await fetch('http://localhost:9000/api/quiz/answer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(answerData),
      });

      if (response.status === 200) {
        const result = await response.json();
        dispatch(postAnswerSuccess(result.message));
        dispatch(fetchQuiz());
      } else {
        const error = await response.json();
        console.error('Error posting answer:', error);
      }
    } catch (error) {
      console.error('Error posting answer:', error);
    }
  };
}












