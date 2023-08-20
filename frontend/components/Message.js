import React from 'react';

export default function Message(props) {
  console.log(`message`,props.message);
  return <div id="message">{props.message}</div>;
}