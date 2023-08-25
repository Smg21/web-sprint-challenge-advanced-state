import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux'; 
import { createQuiz } from '../state/action-creators';

function Form(props) {
  const dispatch = useDispatch(); 

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
      const quizPayload = {
        question_text: formData.question,
        true_answer_text: formData.trueAnswer,
        false_answer_text: formData.falseAnswer,
      };

      await dispatch(createQuiz(quizPayload));

      setFormData({
        question: '',
        trueAnswer: '',
        falseAnswer: '',
      });
    } catch (error) {
      console.error('Error creating quiz:', error);
    }
  };

  const isFormValid =
    formData.question.trim().length > 0 &&
    formData.trueAnswer.trim().length > 0 &&
    formData.falseAnswer.trim().length > 0;

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
        <button type="submit" disabled={!isFormValid}>
          Create Quiz
        </button>
      </form>
    </div>
  );
}

export default connect(null)(Form); 

