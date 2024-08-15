import React from "react";
import styled from "styled-components"

// logos
import MongoDB from './TECHLOGOS/MongoDB.svg'
import Express from './TECHLOGOS/Express.svg'
import ReactLogo from './TECHLOGOS/ReactLogo.svg';
import Node from './TECHLOGOS/Node.svg'
import OpenAI from './TECHLOGOS/OpenAI.svg'
import GoogleCloud from './TECHLOGOS/GoogleCloud.svg'
import FontAwesome from './TECHLOGOS/FontAwesome.svg'
import Axios from './TECHLOGOS/Axios.svg'
import NPM from './TECHLOGOS/NPM.png'
import Heroku from './TECHLOGOS/Heroku.png'
import Github from './TECHLOGOS/Github.svg'

const TechLogo = styled.img `
  aspect-ratio: 16/9;
  height: var(--unit3);
  object-fit: contain;
`

const TechLogos = styled.div`
  display: flex;
  gap: var(--unit2) var(--unit1);
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-bottom: var(--unit2);
`

const technologyData = [
  {
    label: "MERN Stack",
    headline: "The Foundation of T-Chat",
    content: `T-Chat is built on the MERN stack, a powerful combination of MongoDB, Express.js, React, and Node.js. This full-stack TypeScript solution enables fast, scalable, and maintainable web applications. In T-Chat, MongoDB serves as the NoSQL database that stores all user data, chatroom information, and message histories. The backend is powered by Express.js, which handles all API requests, including user authentication, chatroom management, and message processing. React and TypeScript are used on the frontend, providing a modern, efficient, and type-safe environment for developing user interfaces. The use of TypeScript ensures that the code is robust and less prone to errors, while React offers a seamless, component-based architecture that enhances the user experience.`,
    logos: [
      MongoDB,
      Express,
      ReactLogo,
      Node,
    ],
  },
  {
    label: "APIs",
    headline: "Enhancing Functionality with External Services",
    content: `T-Chat integrates several third-party services to enhance its functionality. The Google Cloud Translation API is used for translating text, providing support for over 100 languages. Additionally, Google’s Language Detection API is used for detecting the language of input text, ensuring that messages are accurately translated based on the detected language. OpenAI's Whisper API is leveraged for real-time voice transcriptions, allowing users to send transcribed messages from spoken language. T-Chat also includes an endpoint for retrieving rich metadata when sharing links, making it easier for users to share and preview web content within chatrooms.`,
    logos: [
      OpenAI,
      GoogleCloud
    ],
  },
  {
    label: "NPM Packages",
    headline: "Leveraging Open-Source Libraries",
    content: `To enhance the development and user experience, T-Chat utilizes a variety of NPM packages. FontAwesome is used for icons, adding a visual appeal to the user interface. Axios is employed for making HTTP requests, allowing seamless interaction with external APIs. Other packages include Express.js for building the server-side logic, Socket.io for real-time communication, and Multer for handling file uploads.`,
    logos: [
      FontAwesome,
      Axios,
      NPM,
    ],
  },
  {
    label: "Deployment",
    headline: "Reliable Hosting and Continuous Delivery",
    content: `T-Chat is deployed using Heroku for the backend and GitHub Pages for the frontend. Heroku provides a scalable environment for hosting the Node.js backend, handling server operations, and managing the MongoDB database. GitHub Pages hosts the React frontend, ensuring that the application is accessible and performant. This deployment strategy allows for continuous delivery and rapid iteration, making it easy to push updates and new features to users.`,
    logos: [
      Heroku,
      Github,
    ],
  },
];

const TechnologyUsed = () => {
  return (
    <section className="mt4">
      <label>Building the MVP: Technology Stack</label>
      <h2>How T-Chat Works Under the Hood</h2>
<div className="md-two-columns gap3">
        {technologyData.map((tech, index) => (
          <div key={index} className="mt2">
            <TechLogos>
              {tech.logos.map((logo, idx) => (
                <TechLogo
                  key={idx}
                  src={logo}
                  alt={`${tech.label} Logo ${idx + 1}`}
                />
              ))}
            </TechLogos>
            <div>
              <h5>{tech.headline}</h5>
              <small>{tech.content}</small>
            </div>
          </div>
        ))}
</div>
    </section>
  );
};

export default TechnologyUsed;
