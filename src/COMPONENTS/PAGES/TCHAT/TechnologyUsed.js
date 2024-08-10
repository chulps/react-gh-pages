import React from 'react';

const TechnologyUsed = () => {
  return (
    <section className="mt4">
      <label>Building the MVP: Technology Stack</label>
      <h2>How T-Chat Works Under the Hood</h2>
          <p>
            T-Chat is built using the MERN stack, a powerful combination of MongoDB, Express.js, React, and Node.js. This full-stack JavaScript solution enables fast, scalable, and maintainable web applications. In T-Chat, MongoDB serves as the NoSQL database that stores all user data, chatroom information, and message histories. The backend is powered by Express.js, which handles all API requests, including user authentication, chatroom management, and message processing.
          </p>
<div className="md-two-columns gap3 mt2">
          <small>
            <h5>Frontend Technologies</h5>
            The frontend is built with React and TypeScript, providing a modern, efficient, and type-safe environment for developing user interfaces. TypeScript ensures that the code is robust and less prone to errors, while React offers a seamless, component-based architecture that enhances user experience.
          </small>
          <small>
            <h5>Language Detection and Voice Transcription</h5>
            T-Chat also integrates several third-party services to enhance its functionality. OpenAI's Whisper API is used for real-time voice transcriptions, allowing users to send transcribed messages from spoken language. There's also an endpoint for detecting the language of input text, ensuring that messages are accurately translated based on the detected language.
          </small>
          <small>
            <h5>Google APIs</h5>
            For translating text, T-Chat uses the Google Cloud Translation API, providing support for over 100 languages. The application also includes an endpoint for retrieving rich metadata when sharing links, making it easier for users to share and preview web content within chatrooms.
          </small>
          <small>
            <h5>Instant Transmission</h5>
            T-Chat also uses Socket.io for real-time communication, enabling instant messaging, notifications, and presence updates within chatrooms. This ensures that users experience a responsive and interactive environment, whether they are chatting in real-time or receiving system updates.
          </small></div>
    </section>
  );
};

export default TechnologyUsed;
