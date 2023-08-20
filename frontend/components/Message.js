
import React from 'react';

export default function Message(props) {
  console.log('props.feedbackMessage:', props.feedbackMessage);
  return (
    <div id="message" style={{ display: 'block', color: 'red' }}>
    {props.feedbackMessage}
  </div>
  );
}