import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  fetchQuiz,
  selectAnswer,
  postAnswer,
} from '../state/action-creators';

function Quiz(props) {
  const { quiz, selectedAnswer, fetchQuiz, selectAnswer } = props;

  useEffect(() => {
    fetchQuiz();
  }, [fetchQuiz]);

  const handleAnswerSelect = (answerId) => {
    if (!selectedAnswer) {
      selectAnswer(answerId); 
    }
  };

  if (!quiz) {
    return <div>Loading next quiz...</div>;
  }

  return (
    <div id="wrapper">
      <h2>{quiz.question}</h2>

      <div id="quizAnswers">
        {quiz.answers.map((answer) => (
          <div
            key={answer.id}
            className={`answer ${selectedAnswer === answer.id ? 'selected' : ''}`}
          >
            {answer.text}
            <button onClick={() => handleAnswerSelect(answer.id)}>
              {selectedAnswer === answer.id ? 'SELECTED' : 'Select'}
            </button>
          </div>
        ))}
      </div>

      <button id="submitAnswerBtn" disabled={!selectedAnswer}>
        Submit answer
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  quiz: state.quiz,
  selectedAnswer: state.selectedAnswer,
  infoMessage: state.infoMessage,
});

const mapDispatchToProps = {
  fetchQuiz,
  selectAnswer,
  postAnswer,
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);