const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const API_URL = 'https://api.openai.com/v1/chat/completions';
const API_KEY = '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';

app.post('/api/chat', async (req, res) => {
  try {
    // const { messages } = req.body;

    const response = await axios.post(
      API_URL,
      {
        model: 'gpt-3.5-turbo',
        // messages: messages,
        messages:[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": "Who won the world series in 2020?"},
            {"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."},
            {"role": "user", "content": "Where was it played?"}
        ],
        temperature: 0.7,
        max_tokens: 80,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    res.json(response.data);
    console.log(res.json(response.data));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
