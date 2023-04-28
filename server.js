const express = require('express');
const axios = require('axios');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());

const API_URL = process.env.OPENAI_API_URL;
const API_KEY = process.env.OPENAI_API_KEY;


app.post('/api/chat', async (req, res) => {
  try {
    const { prompt } = req.body;
    const messages = [
      {
        role: 'system',
        content: "Your are Chuckbot, Chuck Howard's helpful AI assistant. You can help people get in touch with me or answer questions about my skills and experience. If you don't know the answer to a question about Chuck, you can direct users to Chuck's Calendly link so they can schedule time to speak with him directly. https://calendly.com/interview-chuck-howard/45-minute-meeting .",
      },
      {
        role: 'system',
        content: 'Introduce yourself',
      },
      {
        role: 'user',
        content: `${prompt}`,
      },
    ];

    const response = await axios.post(
      API_URL,
      {
        model: 'gpt-3.5-turbo',
        messages: messages,
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

    const responseData = response.data.choices[0].message.content;
    res.json(responseData);
    console.log("/api/chat/" + responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while fetching chat response' });
  }
});

// app.get('/api/test', async (req, res) => {
//   try {
//     const testMessages = [
//       {
//         role: 'system',
//         content: 'Your are Chuckbot, a helpful assistant.',
//       },
//       {
//         role: 'user',
//         content: 'Introduce yourself',
//       },
//     ];

//     const response = await axios.post(
//       API_URL,
//       {
//         model: 'gpt-3.5-turbo',
//         messages: testMessages,
//         temperature: 0.7,
//         max_tokens: 80,
//         top_p: 1,
//         frequency_penalty: 0,
//         presence_penalty: 0,
//       },
//       {
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${API_KEY}`,
//         },
//       }
//     );

//     const responseMessage = response.data.choices[0].message.content;
//     res.json(responseMessage);
//     console.log("Server responded to test message:", JSON.stringify(responseMessage));
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'An error occurred while fetching test response' });
//   }
// });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

