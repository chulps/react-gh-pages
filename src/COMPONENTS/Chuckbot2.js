import React, { useState } from 'react';
import axios from 'axios';

const Chuckbot2 = () => {
  const [input, setInput] = useState('');
  const [responses, setResponses] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (input.trim() === '') return;

    const newPrompt = [
      {
        role: 'user',
        content: input,
      },
    ];

    try {
      const response = await axios.post('/api/chat', { prompt: newPrompt });
      setResponses((prevResponses) => [...prevResponses, { role: 'user', content: input }, { role: 'chuckbot', content: response.data }]);
      setInput('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Chuckbot2</h1>
      <div>
        {responses.map((response, index) => (
          <p key={index} className={response.role === 'user' ? 'user' : 'chuckbot'}>
            {response.content}
          </p>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chuckbot2;
