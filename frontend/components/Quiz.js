import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setSelectedAnswer, fetchQuiz } from '../state/action-creators';


function Quiz(props) {
  const { quizData, selectedAnswer, feedbackMessage, setSelectedAnswer, fetchQuiz } = props;

  useEffect(() => {
    fetchQuiz();
  }, [fetchQuiz]);

  const handleAnswerSelect = (answerId) => {
    setSelectedAnswer(answerId);
  };

  const handleSubmitAnswer = () => {
    if (quizData && selectedAnswer !== null) {
      const answerData = {
        quiz_id: quizData.quiz_id,
        answer_id: selectedAnswer,
      };
      fetch('http://localhost:9000/api/quiz/answer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(answerData),
      })
        .then(response => response.json())
        .then(result => {
          console.log('Answer submission result:', result);
          loadNextQuiz();
        })
        .catch(error => console.error('Error submitting answer:', error));
    }
  };

  const loadNextQuiz = () => {
    fetchQuiz();
  };
  return (
    <div id="quiz">
      <div id="quizAnswers">
        <div className="question">{quizData?.question}</div>
        {quizData?.answers.map(answer => (
          <div
            key={answer.answer_id}
            className={`answer ${selectedAnswer === answer.answer_id ? 'selected' : ''}`}
            onClick={() => handleAnswerSelect(answer.answer_id)}
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
        onClick={handleSubmitAnswer}
        disabled={selectedAnswer === null}
      >
        Submit answer
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    quizData: state.quiz,
    selectedAnswer: state.selectedAnswer,
    feedbackMessage: state.infoMessage,
  };
};

const mapDispatchToProps = {
  fetchQuiz,
  setSelectedAnswer,
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);

