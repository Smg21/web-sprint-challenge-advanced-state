import React from 'react';
import { connect } from 'react-redux';
import {
  setNewQuestion,
  setNewTrueAnswer,
  setNewFalseAnswer,
  createQuiz,
} from '../state/action-creators';

function Form(props) {
  const {
    newQuestion,
    newTrueAnswer,
    newFalseAnswer,
    setNewQuestion,
    setNewTrueAnswer,
    setNewFalseAnswer,
    createQuiz,
  } = props;

  const handleInputChange = (event, setterFunction) => {
    setterFunction(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Dispatch an action to create a new quiz with the entered values
    createQuiz({
      question: newQuestion,
      trueAnswer: newTrueAnswer,
      falseAnswer: newFalseAnswer,
    });

    // Clear the input fields
    setNewQuestion('');
    setNewTrueAnswer('');
    setNewFalseAnswer('');
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
              value={newQuestion}
              onChange={(e) => handleInputChange(e, setNewQuestion)}
            />
          </label>
        </div>
        <div>
          <label>
            True Answer:
            <input
              type="text"
              value={newTrueAnswer}
              onChange={(e) => handleInputChange(e, setNewTrueAnswer)}
            />
          </label>
        </div>
        <div>
          <label>
            False Answer:
            <input
              type="text"
              value={newFalseAnswer}
              onChange={(e) => handleInputChange(e, setNewFalseAnswer)}
            />
          </label>
        </div>
        <button type="submit">Create Quiz</button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  newQuestion: state.form.newQuestion,
  newTrueAnswer: state.form.newTrueAnswer,
  newFalseAnswer: state.form.newFalseAnswer,
});


const mapDispatchToProps = {
  setNewQuestion,
  setNewTrueAnswer,
  setNewFalseAnswer,
  createQuiz,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
