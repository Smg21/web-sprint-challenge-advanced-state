import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actioncreators from '../state/action-creators';

// //FUNCTION QUIZ ORIGINAL
function Quiz(props) {
  const { quizData, selectedAnswer, selectAnswer, fetchQuiz, postAnswer } = props;
  console.log('quizData in Quiz component:',);

  useEffect(() => {
    !quizData && fetchQuiz();
  }, []);

  // answers 

  if (!quizData) {
    return <div>Loading...</div>;
  }
 

  return (
    <div id="quiz">
      <div id="quizAnswers">
        <div className="question">{quizData?.question}</div>
          <div
            key={quizData.answers[0].answer_id}
            className={`answer ${selectedAnswer === quizData.answers[0].answer_id ? 'selected' : ''}`}
            onClick={() => selectAnswer(quizData.answers[0].answer_id)}
          >
            <div className="answer-text">{quizData.answers[0].text}</div>
            <button>
              {selectedAnswer === quizData.answers[0].answer_id ? 'SELECTED' : 'Select'}
            </button>
          </div>
          <div
            key={quizData.answers[1].answer_id}
            className={`answer ${selectedAnswer === quizData.answers[1].answer_id ? 'selected' : ''}`}
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
        onClick={postAnswer({quiz_id:quizData.quiz_id, answer_id:selectedAnswer})}
        // onClick={() => postAnwser({quiz_id: quizData.quiz_id, answer_id: selectedAnswer})}

        disabled={selectedAnswer === null}
      >
        Submit answer
      </button>
    </div>
  );
}
export default connect(st => st, actioncreators)(Quiz);

