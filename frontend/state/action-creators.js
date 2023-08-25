export const MOVE_CLOCKWISE = 'MOVE_CLOCKWISE';
export const MOVE_COUNTERCLOCKWISE = 'MOVE_COUNTERCLOCKWISE';
export const SELECT_ANSWER = 'SELECT_ANSWER';
export const SET_INFO_MESSAGE = 'SET_INFO_MESSAGE';
export const SET_QUIZ = 'SET_QUIZ';

export const INPUT_CHANGE = 'INPUT_CHANGE';
export const RESET_FORM = 'RESET_FORM';

import axios from 'axios';

export function moveClockwise() {
  return { type: MOVE_CLOCKWISE };
}

export function moveCounterClockwise() {
  return { type: MOVE_COUNTERCLOCKWISE };
}

export function selectAnswer(answerId) {
  return {
    type: SELECT_ANSWER,
    payload: answerId,
  };
}

export function setMessage(message) {
  return {
    type: SET_INFO_MESSAGE,
    payload: message,
  };
}

export function setQuiz(quiz) {
  return {
    type: SET_QUIZ,
    payload: quiz,
  };
}



export function inputChange(data) {
  return {
    type: INPUT_CHANGE,
    payload: data,
  };
}

export function resetForm() {
  return {
    type: RESET_FORM,
  };
}



export function fetchQuiz() {
  return function (dispatch) {
    dispatch(setQuiz(null)); 
    axios.get('http://localhost:9000/api/quiz/next')
      .then(response => {
        dispatch(setQuiz(response.data)); 
      })
      .catch(error => {
        console.error('Error fetching quiz:', error);
      });
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
        dispatch(setMessage(result.message)); 
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

export function postQuiz(newQuizData) {
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
        dispatch(setMessage('Quiz created successfully'));
      } else {
        const error = await response.json();
        console.error('Error creating quiz:', error);
      }
    } catch (error) {
      console.error('Error creating quiz:', error);
    }
  };
}