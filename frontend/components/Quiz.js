import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchQuiz, postAnswer, selectAnswer } from '../state/action-creators';

function Quiz(props) {
  const { quiz, fetchQuiz, selectedAnswer, selectAnswer, postAnswer } = props;

  useEffect(() => {
    fetchQuiz();
  }, [fetchQuiz]);

  const handleAnswerSelect = (answerId) => {
    if (selectedAnswer === answerId) {
      selectAnswer(null);
    } else {
      selectAnswer(answerId);
    }
  };

  const handleAnswerSubmit = () => {
    if (selectedAnswer !== null) {
      const answerData = {
        quiz_id: quiz.id,
        answer_id: selectedAnswer,
      };
      console.log('answerData', answerData); 
      postAnswer(answerData);
      selectAnswer(null);
    }
  };

  return (
    <div id="wrapper">
      <h2>{quiz ? quiz.question : 'Loading next quiz...'}</h2>

      <div id="quizAnswers">
        {quiz &&
          quiz.answers.map((answer) => (
            <div
              key={answer.id}
              className={`answer ${selectedAnswer === answer.id ? 'selected' : ''}`}
            >
              {answer.text}
              <button
                onClick={() => handleAnswerSelect(answer.id)}
                className={`selectButton ${selectedAnswer === answer.id ? 'selected' : ''}`}
                disabled={selectedAnswer !== null}
              >
                {selectedAnswer === answer.id ? 'SELECTED' : 'Select'}
              </button>
            </div>
          ))}
      </div>

      <button
        id="submitAnswerBtn"
        disabled={selectedAnswer === null}
        onClick={handleAnswerSubmit}
      >
        Submit answer
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  quiz: state.quiz,
  selectedAnswer: state.selectedAnswer || null, 
});

const mapDispatchToProps = {
  fetchQuiz,
  postAnswer,
  selectAnswer,
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
