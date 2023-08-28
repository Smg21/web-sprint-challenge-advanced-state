import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { selectAnswer, fetchQuiz, postAnswer } from '../state/action-creators';

function Quiz(props) {
  const { quiz, selectedAnswer, selectAnswer, fetchQuiz, postAnswer } = props;

  useEffect(() => {
    if (!quiz) {
      fetchQuiz();
    }
  }, []);

  return (
    <div id="quiz">
      <div id="quizAnswers">
        <div className="question">{quiz?.question}</div>
        {quiz &&
          quiz.answers.map((answer) => (
            <div
              key={answer.answer_id}
              className={`answer ${selectedAnswer === answer.answer_id ? 'selected' : ''}`}
              onClick={() => selectAnswer(answer.answer_id)}
            >
              <div className="answer-text">{answer.text}</div>
              <button>
                {selectedAnswer === answer.answer_id ? 'SELECTED' : 'Select'}
              </button>
            </div>
          ))}
      </div>
      <button
        id="submitAnswerBtn"
        onClick={() => postAnswer({ quiz_id: quiz.quiz_id, answer_id: selectedAnswer })}
        disabled={selectedAnswer === null || !quiz}
      >
        Submit answer
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    quiz: state.quiz,
    selectedAnswer: state.selectedAnswer,
  };
};

export default connect(mapStateToProps, { selectAnswer, fetchQuiz, postAnswer })(Quiz);
