
// import React, { useState, useEffect } from 'react';

// export default function Quiz(props) {
//   const [quizData, setQuizData] = useState(null);
//   const [selectedAnswer, setSelectedAnswer] = useState(null);

//   useEffect(() => {
//     fetch('http://localhost:9000/api/quiz/next')
//       .then(response => response.json())
//       .then(data => {
//         console.log('Fetched quiz data:', data); // Add this line for debugging
//         setQuizData(data);
//       })
//       .catch(error => console.error('Error fetching quiz:', error));
//   }, []);

//   const handleAnswerSelect = (answerId, event) => {
//     console.log('Clicked answer with ID:', answerId);
//     console.log('Event:', event);
//     setSelectedAnswer(answerId);
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
//           fetch('http://localhost:9000/api/quiz/next')
//             .then(response => response.json())
//             .then(data => {
//               console.log('Fetched next quiz data:', data); // Add this line for debugging
//               setQuizData(data);
//             })
//             .catch(error => console.error('Error fetching quiz:', error));
//           setSelectedAnswer(null);
//         })
//         .catch(error => console.error('Error submitting answer:', error));
//     }
//   };

//   return (
//     <div>
//      <div id="quizAnswers">
//   <div className="question">{quizData?.question}</div>
//   {quizData?.answers.map(answer => (
//     <div
//       key={answer.answer_id}
//       className={`answer ${selectedAnswer === answer.answer_id ? 'selected' : ''}`}
//       onClick={() => handleAnswerSelect(answer.answer_id)}
//       data-answer-id={answer.answer_id}
//     >
//       <div className="answer-text">{answer.text}</div>
//       <button>
//         {selectedAnswer === answer.answer_id ? 'SELECTED' : 'Select'}
//       </button>
//     </div>
//   ))}
// </div>
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

import React, { useState, useEffect } from 'react';
import Message from './Message'; // Import the Message component

export default function Quiz(props) {
  const [quizData, setQuizData] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedbackMessage, setFeedbackMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:9000/api/quiz/next')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched quiz data:', data);
        setQuizData(data);
      })
      .catch(error => console.error('Error fetching quiz:', error));
  }, []);

  const handleAnswerSelect = (answerId, event) => {
    console.log('Clicked answer with ID:', answerId);
    console.log('Event:', event);
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

          // Update the feedback message based on the API response
          setFeedbackMessage(result.message);

          fetch('http://localhost:9000/api/quiz/next')
            .then(response => response.json())
            .then(data => {
              console.log('Fetched next quiz data:', data);
              setQuizData(data);
            })
            .catch(error => console.error('Error fetching quiz:', error));
          setSelectedAnswer(null);
        })
        .catch(error => console.error('Error submitting answer:', error));
    }
  };

  return (
    <div>
      <div id="quizAnswers">
      {feedbackMessage && <Message message={feedbackMessage} />}
        {/* Display the question and answers */}
        <div className="question">{quizData?.question}</div>
        {quizData?.answers.map(answer => (
          <div
            key={answer.answer_id}
            className={`answer ${selectedAnswer === answer.answer_id ? 'selected' : ''}`}
            onClick={() => handleAnswerSelect(answer.answer_id)}
            data-answer-id={answer.answer_id}
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
