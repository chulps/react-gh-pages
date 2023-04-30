// index.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
//app.use(cors({ origin: 'http://localhost:3000'})); // For development
// app.use(cors({ origin: 'https://2bbc-2405-6583-66a0-4f00-cbe-ba27-97cc-e576.ngrok-free.app'})); // For preproduction
app.use(cors({ origin: 'https://chulps.github.io/react-gh-pages/'})); // For production

app.use(express.json());

app.post('/api/openai', async (req, res) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_OPENAI_API_URL,
      req.body,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
