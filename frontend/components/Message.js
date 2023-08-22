import React, { useState, useEffect } from 'react';

export default function Message() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    console.log('Fetching message...');

    fetch(' http://localhost:9000/api/quiz/next'
      )
      .then(response => response.json())
      .then(data => {
        console.log('Fetched data:', data.message);

        if (data.message) {
          setMessage(data.message);
          console.log('Message set:', data.message);
        } else {
          console.error('Message property not found in response:', data);
          setMessage('Error: Message property not found in response');
        }
      })
      .catch(error => {
        console.error('Error fetching message:', error);
        setMessage('Error fetching message');
      });
  }, []);

  return <div id="message">{message}</div>;
}

