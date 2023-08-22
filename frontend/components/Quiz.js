import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actioncreators from '../state/action-creators';


function Quiz(props) {
  const { quizData, selectedAnswer, selectAnswer, fetchQuiz, postAnwser } = props;

  useEffect(() => {
    !quizData && fetchQuiz();
  }, []);

  return (
    <div id="quiz">
      <div id="quizAnswers">
        <div className="question">{quizData?.question}</div>
          <div
            key={quizData.answers[0].answer_id}
            className={`answer ${selectedAnswer === quizData.anwsers[0].answer_id ? 'selected' : ''}`}
            onClick={() => selectAnswer(quizData.answers[0].answer_id)}
          >
            <div className="answer-text">{quizData.answers[0].text}</div>
            <button>
              {selectedAnswer === quizData.answers[0].answer_id ? 'SELECTED' : 'Select'}
            </button>
          </div>
          <div
            key={quizData.answers[1].answer_id}
            className={`answer ${selectedAnswer === quizData.anwsers[1].answer_id ? 'selected' : ''}`}
            onClick={() => selectAnswer(quizData.answers[1].answer_id)}
          >
            <div className="answer-text">{quizData.answers[1].text}</div>
            <button>
              {selectedAnswer === quizData.answers[1].answer_id ? 'SELECTED' : 'Select'}
            </button>
          </div>
      </div>
      <button
        id="submitAnswerBtn"
        onClick={postAnwser({quiz_id:quizData.quiz_id, answer_id:selectedAnswer})}
        disabled={selectedAnswer === null}
      >
        Submit answer
      </button>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     quizData: state.quiz,
//     selectedAnswer: state.selectedAnswer
//   };
// };

// const mapDispatchToProps = {
//   fetchQuiz,
//   selectAnwser,
//   postAnwser
// };

export default connect(st => st, actioncreators)(Quiz);

