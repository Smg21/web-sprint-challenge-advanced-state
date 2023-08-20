// import React from 'react';

// export default function Message(props) {
//   const [feedbackMessage, setFeedbackMessage] = useState('');
//   {feedbackMessage && <div id="message">{feedbackMessage}</div>}
//   console.log(`message`,props.message);
//   // return <div id="message">{props.message}</div>;
//   return <div id="message">Nice job!</div>
  
// }
// import React from 'react';
// import Quiz from './Quiz';

// C:\Users\Smg21\OneDrive\Desktop\BLOOMTECH\UNIT 3\Sprint 10\web-sprint-challenge-advanced-state\frontend\components\Quiz.js
import React from 'react';

export default function Message(props) {
  console.log('props.feedbackMessage:', props.feedbackMessage); // Add this line
  return (
    <div id="message" style={{ display: 'block', color: 'red' }}>
    {props.feedbackMessage}
  </div>
  );
}