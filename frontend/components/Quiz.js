import React, { useState, useEffect } from 'react';
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

  const handleAnswerSelect = (answerId) => {
    console.log(
      'Button class when selected:', // Log the message
      selectedAnswer === answer.answer_id ? 'SELECTED' : 'Select'
    );
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
          setFeedbackMessage(result.message);
          setSelectedAnswer(null);
          loadNextQuiz();
        })
        .catch(error => console.error('Error submitting answer:', error));
    }
  };

  const loadNextQuiz = () => {
    fetch('http://localhost:9000/api/quiz/next')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched next quiz data:', data);
        setQuizData(data);
      })
      .catch(error => console.error('Error fetching quiz:', error));
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
