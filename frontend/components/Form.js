import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createQuiz } from '../state/action-creators';

function Form(props) {
  const [formData, setFormData] = useState({
    question: '',
    trueAnswer: '',
    falseAnswer: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Create a new quiz payload
      const quizPayload = {
        question_text: formData.question,
        true_answer_text: formData.trueAnswer,
        false_answer_text: formData.falseAnswer,
      };

      // Send the payload to the API to create a new quiz
      await fetch('http://localhost:9000/api/quiz/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(quizPayload),
      });

      // Clear the input fields
      setFormData({
        question: '',
        trueAnswer: '',
        falseAnswer: '',
      });
    } catch (error) {
      console.error('Error creating quiz:', error);
    }
  };

  return (
    <div>
      <h2>Create New Quiz</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Question:
            <input
              type="text"
              name="question"
              value={formData.question}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            True Answer:
            <input
              type="text"
              name="trueAnswer"
              value={formData.trueAnswer}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            False Answer:
            <input
              type="text"
              name="falseAnswer"
              value={formData.falseAnswer}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <button type="submit">Create Quiz</button>
      </form>
    </div>
  );
}

export default connect(null, { createQuiz })(Form);
