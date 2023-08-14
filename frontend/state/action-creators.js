export const MOVE_CLOCKWISE = 'MOVE_CLOCKWISE';
export const MOVE_COUNTERCLOCKWISE = 'MOVE_COUNTERCLOCKWISE';
export const SET_QUIZ = 'SET_QUIZ';

export const SET_INFO_MESSAGE = 'SET_INFO_MESSAGE';

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

export const SELECT_ANSWER = 'SELECT_ANSWER';

export function selectAnswer(answerId) { 
  return {
    type: SELECT_ANSWER, 
    payload: answerId,
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

export function postAnswer(answerId) {
  return async function (dispatch) {
    try {
      const response = await fetch('http://localhost:9000/api/quiz/answer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ answer_id: answerId }),
      });

      const result = await response.json();
      dispatch(postAnswerSuccess(result.message));

      dispatch(fetchQuiz()); 
    } catch (error) {
      console.error('Error posting answer:', error);
    }
  };
}

// export {
//   fetchQuiz,
//   selectAnswer,
//   fetchQuizSuccess,
//   postAnswer,
//   postAnswerSuccess,
// };