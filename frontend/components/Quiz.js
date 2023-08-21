// import React, { useState, useEffect } from 'react';
// import { connect } from 'react-redux'; // Import the connect function
// import { setSelectedAnswer } from './action-creators'; // Import your action creators


// export default function Quiz(props) {
//   const { quizData, selectedAnswer, feedbackMessage, dispatch } = props;

//   // const [quizData, setQuizData] = useState(null);
//   // const [selectedAnswer, setSelectedAnswer] = useState(null);
//   // const [feedbackMessage, setFeedbackMessage] = useState('');

//   useEffect(() => {
//     fetch('http://localhost:9000/api/quiz/next')
//       .then(response => response.json())
//       .then(data => {
//         console.log('Fetched quiz data:', data);
//         setQuizData(data);
//       })
//       .catch(error => console.error('Error fetching quiz:', error));
//   }, []);

//   // const handleAnswerSelect = (answerId) => {
   
//   //   console.log('class', answerId.className);
//   //   setSelectedAnswer(answerId);
//   // };

//   const handleAnswerSelect = (answerId) => {
//     console.log('class', answerId.className);
//     dispatch(setSelectedAnswer(answerId)); // Dispatch the action using Redux
//   };

//   const handleSubmitAnswer = () => {
//     if (quizData && selectedAnswer !== null) {
//       const answerData = {
//         quiz_id: quizData.quiz_id,
//         answer_id: selectedAnswer,
//       };
//       fetch('http://localhost:9000/api/quiz/answer', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(answerData),
//       })
//         .then(response => response.json())
//         .then(result => {
//           console.log('Answer submission result:', result);
//           setFeedbackMessage(result.message);
//           setSelectedAnswer(null);
//           loadNextQuiz();
//         })
//         .catch(error => console.error('Error submitting answer:', error));
//     }
//   };

//   const loadNextQuiz = () => {
//     fetch('http://localhost:9000/api/quiz/next')
//       .then(response => response.json())
//       .then(data => {
//         console.log('Fetched next quiz data:', data);
//         setQuizData(data);
//       })
//       .catch(error => console.error('Error fetching quiz:', error));
//   };

//   return (
//     <div id="quiz">
//       {feedbackMessage && <div id="message">{feedbackMessage}</div>}
//       <div id="quizAnswers">
//         <div className="question">{quizData?.question}</div>
//         {quizData?.answers.map(answer => (
//   <div
//     key={answer.answer_id}
//     className={`answer ${selectedAnswer === answer.answer_id ? 'selected' : ''}`}
//     onClick={() => handleAnswerSelect(answer.answer_id)}
//   >
//     <div className="answer-text">{answer.text}</div>
//     <button>
//       {selectedAnswer === answer.answer_id ? 'SELECTED' : 'Select'}
//     </button>
//   </div>
// ))}
//       </div>
//       <button
//         id="submitAnswerBtn"
//         onClick={handleSubmitAnswer}
//         disabled={selectedAnswer === null}
//       >
//         Submit answer
//       </button>
//     </div>
//   );
// }

// const mapStateToProps = (state) => {
//   return {
//     quizData: state.quiz,
//     selectedAnswer: state.selectedAnswer,
//     feedbackMessage: state.infoMessage,
//   };
// };
// export default connect(mapStateToProps)(Quiz);
//

// import React, { useEffect } from 'react';
// import { connect } from 'react-redux';
// import { setSelectedAnswer, fetchQuiz } from '../state/action-creators';

// function Quiz(props) {
//   const { quizData, selectedAnswer, feedbackMessage, dispatch, fetchQuiz } = props;

//   useEffect(() => {
//     fetchQuiz();
//   }, [fetchQuiz]);

//   const handleAnswerSelect = (answerId) => {
//     dispatch(setSelectedAnswer(answerId));
//   };

//   const handleSubmitAnswer = () => {
//     if (quizData && selectedAnswer !== null) {
//       const answerData = {
//         quiz_id: quizData.quiz_id,
//         answer_id: selectedAnswer,
//       };
//       fetch('http://localhost:9000/api/quiz/answer', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(answerData),
//       })
//         .then(response => response.json())
//         .then(result => {
//           console.log('Answer submission result:', result);
//           // Handle the submission result as needed
//           loadNextQuiz();
//         })
//         .catch(error => console.error('Error submitting answer:', error));
//     }
//   };

//   const loadNextQuiz = () => {
//     fetchQuiz();
//   };
//   return (
//     <div id="quiz">
//       {feedbackMessage && <div id="message">{feedbackMessage}</div>}
//       <div id="quizAnswers">
//         <div className="question">{quizData?.question}</div>
//         {quizData?.answers.map(answer => (
//           <div
//             key={answer.answer_id}
//             className={`answer ${selectedAnswer === answer.answer_id ? 'selected' : ''}`}
//             onClick={() => handleAnswerSelect(answer.answer_id)}
//           >
//             <div className="answer-text">{answer.text}</div>
//             <button>
//               {selectedAnswer === answer.answer_id ? 'SELECTED' : 'Select'}
//             </button>
//           </div>
//         ))}
//       </div>
//       <button
//         id="submitAnswerBtn"
//         onClick={handleSubmitAnswer}
//         disabled={selectedAnswer === null}
//       >
//         Submit answer
//       </button>
//     </div>
//   );
// }

// const mapStateToProps = (state) => {
//   return {
//     quizData: state.quiz,
//     selectedAnswer: state.selectedAnswer,
//     feedbackMessage: state.infoMessage,
//   };
// };

// const mapDispatchToProps = {
//   fetchQuiz,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Quiz);

///////////////

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
          // Handle the submission result as needed
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
      {feedbackMessage && <div id="message">{feedbackMessage}</div>}
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
  setSelectedAnswer, // Include your action here
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);