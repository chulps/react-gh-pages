import React, { useState } from 'react';
import axios from 'axios';

import dotenv from 'dotenv';

dotenv.config();

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = (message) => {
    setMessages([...messages, { sender: 'user', text: message }]);
    setInput('');
    getBotResponse(message);
  };

  const getBotResponse = async (message) => {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/engines/davinci-codex/completions',
        {
          prompt: `You are an assistant chatbot. User: ${message}\nAssistant:`,
          max_tokens: 50,
          n: 1,
          stop: null,
          temperature: 0.5,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_CHAT_GPT_API_KEY}`,
          },
        },
      );

      const aiResponse = response.data.choices[0].text.trim();
      setMessages([...messages, { sender: 'bot', text: aiResponse }]);
    } catch (error) {
      console.error('Error fetching AI response:', error);
      setMessages([...messages, { sender: 'bot', text: 'Error: Unable to fetch AI response' }]);
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chat-window">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => (e.key === 'Enter' ? sendMessage(input) : null)}
        />
        <button onClick={() => sendMessage(input)}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
