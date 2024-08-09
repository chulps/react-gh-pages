// libs
import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlane,
  faGlobe,
  faBook,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

// style
import "./t-chat.css";

// images
import Home from "./Home.png";
import Chatroom from "./Chatroom.png";
import ChatroomsTab from "./ChatroomsTab.png";
import JourneyMap from "./JourneyMap.png";
import DeepLLogo from "./DeepLLogo.svg";
import GoogleTranslateLogo from "./GoogleTranslateLogo.svg";
import IMessageLogo from "./IMessageLogo.svg";
import ZaloLogo from "./ZaloLogo.svg";
import VoiceTraLogo from "./VoiceTraLogo.png";

// Define competitor analysis data
const competitors = [
  {
    name: "Google Translate",
    logo: GoogleTranslateLogo,
    autoTranslate: true,
    noSignup: false,
    browserBased: true,
    noDeviceShare: false,
    multiLang: true,
    chat: false,
  },
  {
    name: "Zalo",
    logo: ZaloLogo,
    autoTranslate: false,
    noSignup: false,
    browserBased: false,
    noDeviceShare: false,
    multiLang: true,
    chat: true,
  },
  {
    name: "DeepL",
    logo: DeepLLogo,
    autoTranslate: false,
    noSignup: false,
    browserBased: true,
    noDeviceShare: false,
    multiLang: true,
    chat: false,
  },
  {
    name: "iMessage",
    logo: IMessageLogo,
    autoTranslate: true,
    noSignup: false,
    browserBased: false,
    noDeviceShare: false,
    multiLang: true,
    chat: true,
  },
  {
    name: "VoiceTra",
    logo: VoiceTraLogo,
    autoTranslate: true,
    noSignup: true,
    browserBased: false,
    noDeviceShare: false,
    multiLang: true,
    chat: false,
  },
  {
    name: "T-Chat",
    autoTranslate: true,
    noSignup: true,
    browserBased: true,
    noDeviceShare: true,
    multiLang: true,
    chat: true,
  },
];
const CompetitorAnalysisTable = () => {
  return (
    <div className="competitor-analysis">
      <div className="table-wrapper">
        <table>
          <tbody>
            {competitors.map((competitor, index) => (
              <tr key={index}>
                <td className="first-column-content">
                  <img
                    className="competitor-logo"
                    src={competitor.logo ? competitor.logo : ""}
                    alt="Competitor logo"
                  />
                  <p>{competitor.name}</p>
                </td>
                <td>{competitor.autoTranslate ? "✔️" : "❌"}</td>
                <td>{competitor.noSignup ? "✔️" : "❌"}</td>
                <td>{competitor.browserBased ? "✔️" : "❌"}</td>
                <td>{competitor.noDeviceShare ? "✔️" : "❌"}</td>
                <td>{competitor.multiLang ? "✔️" : "❌"}</td>
              </tr>
            ))}
          </tbody>
          <thead>
            <tr>
              <th>Competitor</th>
              {features.map((feature, index) => (
                <th key={index}>{feature}</th>
              ))}
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

const userPersonas = [
  {
    name: "The Frequent Traveler",
    color: "var(--blue4)",
    icon: faPlane,
    description:
      "I want to talk to people without shoving my phone in their face every time I say something. This allows more respect for people's space and property.",
    details: {
      goals: [
        "Communicate effectively while traveling.",
        "Avoid sharing devices with strangers.",
        "Access translation services quickly.",
      ],
      frustrations: [
        "Difficulty communicating in real-time with locals.",
        "Inconsistent translation quality in existing apps.",
        "Limited access to translation services without internet.",
      ],
      personality: ["Adventurous", "Open-minded", "Resourceful"],
      tech: "75% Mobile, 25% Desktop",
    },
  },
  {
    name: "The Multinational Team Member",
    color: "var(--green4)",
    icon: faGlobe,
    description:
      "I want to use this at work so I can communicate with my colleagues in their native languages, so we can collaborate effectively.",
    details: {
      goals: [
        "Collaborate effectively across different languages.",
        "Maintain productivity without language barriers.",
        "Use a unified platform for communication.",
      ],
      frustrations: [
        "Language barriers slow down project timelines.",
        "Existing tools are not optimized for real-time translation.",
        "Limited options for multi-language support in professional settings.",
      ],
      personality: ["Organized", "Team-oriented", "Efficient"],
      tech: "60% Desktop, 40% Mobile",
    },
  },
  {
    name: "The Language Enthusiast",
    color: "var(--red4)",
    icon: faBook,
    description: "I could use this when there is a gap in my vocabulary.",
    details: {
      goals: [
        "Practice speaking and understanding new languages.",
        "Engage with native speakers.",
        "Access a wide variety of languages easily.",
      ],
      frustrations: [
        "Limited opportunities to converse with native speakers.",
        "Translation tools that don’t capture slang or nuance.",
        "Lack of real-time language practice tools.",
      ],
      personality: ["Curious", "Determined", "Linguistically skilled"],
      tech: "70% Mobile, 30% Desktop",
    },
  },
  {
    name: "The International Family Member",
    color: "var(--gold4)",
    icon: faUsers,
    description:
      "I want to stay connected with my family, so we can understand each other.",
    details: {
      goals: [
        "Keep in touch with family members across different languages.",
        "Maintain strong relationships despite language differences.",
        "Easily switch between languages in conversations.",
      ],
      frustrations: [
        "Language barriers make it hard to connect.",
        "Inconsistent translation quality makes conversations frustrating.",
        "Existing tools require too many steps to translate messages.",
      ],
      personality: ["Family-oriented", "Supportive", "Loving"],
      tech: "65% Mobile, 35% Desktop",
    },
  },
];

const UserPersonasList = () => {
  return (
    <ul className="lg-two-columns mt2 gap3 mb2">
      {userPersonas.map((persona, index) => (
        <li
          className="p2"
          style={{ background: `${persona.color}` }}
          key={index}
        >
          <h1 className="p2 pb3 flex-center">
            <FontAwesomeIcon icon={persona.icon} />
          </h1>
          <h4>{persona.name}:</h4>
          <p>"{persona.description}"</p>
          <ul className="two-columns gap2 mt2">
            <li>
              <h5>Goals:</h5>
              <small>{persona.details.goals.join(", ")}</small>{" "}
            </li>
            <li>
              <h5>Frustrations:</h5>
              <small>{persona.details.frustrations.join(", ")}</small>{" "}
            </li>
            <li>
              <h5>Personality:</h5>
              <small>{persona.details.personality.join(", ")}</small>{" "}
            </li>
            <li>
              <h5>Tech:</h5>
              <small>{persona.details.tech}</small>{" "}
            </li>
          </ul>
        </li>
      ))}
    </ul>
  );
};

const features = [
  "Auto-Translate",
  "No Signup Required",
  "Browser-Based",
  "No Device Sharing",
  "Supports Multiple Languages",
];

// Create a component for the competitor analysis table

// Styled Components
const CircleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: var(--unit1);
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => (props.filled ? "var(--goldA)" : "#e0e0e0")};
`;

const SurveyItem = styled.div`
  display: flex;
  gap: var(--unit2);
  align-items: flex-start;
`;

const survey1Questions = [
  {
    question:
      "Is it useful for messages to be automatically translated instead of having to take multiple actions?",
    yes: 15,
    total: 16,
  },
  {
    question:
      "Is it easy to join a chatroom and start communicating quickly without any downloads or signup required?",
    yes: 12,
    total: 16,
  },
  {
    question:
      "Is the browser-based approach more convenient than downloading an app?",
    yes: 13,
    total: 16,
  },
  {
    question:
      "Is it better than having to share a single device in order to communicate?",
    yes: 16,
    total: 16,
  },
  { question: "Would you recommend T-Chat to a friend?", yes: 16, total: 16 },
  {
    question: "Would you sign up to create an account after using it?",
    yes: 8,
    total: 16,
  },
];

const TChat = () => {
  return (
    <div id="case-study">
      <Helmet>
        <title>T-Chat Case Study</title>
      </Helmet>

      <section className="pt3">
        <label>Project:</label>
        <h1>T-Chat</h1>
      </section>

      <section className="md-two-columns gap2 md-gap3 lg-gap4 pb4">
        <div>
          <p>
            T-Chat is a browser-based chat application that enables users that
            speak different languages to communicate conveniently. It leverages
            Google's Cloud Translation API and Open AI's Whisper API to provide
            real-time translation between users, breaking down language
            barriers, and ensuring that conversations flow smoothly. Many users
            who speak different languages can join a conversation and everyone
            will understand eachother.
          </p>
        </div>
        <div className="two-columns gap2">
          <div>
            <label>Title:</label>
            <h5>"CEO" (I'm the only team member)</h5>
          </div>
          <div>
            <label>City:</label>
            <h5>Sapporo</h5>
          </div>
          <div>
            <label>When:</label>
            <h5>2024 - Present</h5>
          </div>
          <div>
            <label>Country:</label>
            <h5>
              <span role="img" aria-label="Japan">
                🇯🇵
              </span>
              &nbsp;Japan
            </h5>
          </div>
        </div>
      </section>

      <section className="mb4 lg-two-columns gap4">
        <div className="flex-center">
          <div className="half md-third lg-whole xl-half">
            <div className="iphone-frame">
              <img className="figma-frame" src={Home} alt="T-Chat" />
            </div>
          </div>
        </div>
        <div>
          <label>Responsibilities:</label>
          <h2 className="mb1">What do I do here?</h2>
          <p>
            TL;DR --{" "}
            <i>
              I made a fully functional web app from concept to deployment
              flying solo!
            </i>
          </p>
          <br />
          <div
            className="sm-two-columns"
            style={{ gap: "var(--unit2) var(--unit3)" }}
          >
            <div>
              <h5>Branding:</h5>
              <small>
                I used my personal brand so I could save time, plus I don't
                think I can ever make a cooler logo.
              </small>
            </div>
            <div>
              <h5>Product Development:</h5>
              <small>
                Managed the full stack development of the application, from
                front-end to back-end integration, utilizing the MERN stack.
              </small>
            </div>
            <div>
              <h5>UI/UX Design:</h5>
              <small>
                Designed and iterated on user interfaces and experiences,
                informed by user feedback and A/B testing.
              </small>
            </div>
            <div>
              <h5>Research:</h5>
              <small>
                Conducted user and competitor research to identify key features
                and pain points, guiding the overall design and development
                process.
              </small>
            </div>
            <div>
              <h5>Testing & Iteration:</h5>
              <small>
                Performed extensive testing and iterative improvements based on
                user feedback to ensure a smooth and intuitive user experience.
              </small>
            </div>
          </div>
        </div>
      </section>

      <section>
        <label>Problem Statement</label>
        <h2>Breaking Down Language Barriers in Real-Time</h2>
        <p>
          In a world that’s more connected than ever, language barriers still
          make communication challenging. Learning a new language takes time,
          and current solutions like Google Translate, Zalo, and iMessage offer
          translation, but they often involve clunky steps—like copying and
          pasting text, navigating through menus, or, in the case of iMessage,
          requiring everyone to have an iPhone. These methods can make real-time
          conversations difficult and awkward. T-Chat solves this by providing a
          browser-based chat app with real-time translation, letting users from
          different language backgrounds communicate easily. There’s no need for
          extra downloads or special devices, and signups are optional, making
          conversations flow smoothly and helping people connect and understand
          each other better.
        </p>
      </section>

      <section className="mt4">
        <label>Research and Planning</label>
        <h2 style={{ maxWidth: "var(--unit6)" }}>
          Understanding the Challenges and Opportunities
        </h2>
        <hr className="mt2 mb3" />

        <label>Competitor Analysis</label>

        <h3 className="mb1">Competitor and User Research Overview</h3>

        {/* Competitor Analysis Table */}
        <CompetitorAnalysisTable />
        <p className="mt1">
          Competitor research was a key part of creating T-Chat. I looked at
          popular tools like Google Translate, Zalo, DeepL, iMessage, and
          VoiceTra to see what they do well and where they fall short. Google
          Translate and DeepL offer good translations, but they require users to
          copy and paste text, which interrupts the conversation. Zalo makes you
          dig through menus to translate messages, and iMessage only works if
          everyone has an iPhone. VoiceTra is great for two-person chats on one
          device but doesn’t support group chats or multiple devices. By
          studying these competitors, I found gaps and opportunities to make
          something better. This research helped shape T-Chat, making sure it
          solves the problems these other tools have and offers an easy,
          real-time way for people to talk across languages.
        </p>
      </section>

      <section className="mt3">
        <label>User Personas</label>
        <h3>Who needs this?</h3>
        <UserPersonasList />
      </section>
      <section className="mt3">
        <div>
          <h3>Survey and User Feedback</h3>
          <p className="mb2">
            I ventured out into the wild and interviewed 16 people in Sapporo,
            Japan with different backgrounds, languages, and opinions. Their
            ages ranged from 23 - 65. About half of the users spoke only
            Japanese. Other users were a mix of people who spoke only English,
            or spoke 2 or more languages.
          </p>
        </div>
        <div className="survey-chart md-two-columns lg-three-columns gap3">
          {survey1Questions.map((question, index) => (
            <SurveyItem key={index}>
              <div>
                <CircleGrid>
                  {Array.from({ length: question.total }).map((_, i) => (
                    <Circle key={i} filled={i < question.yes} />
                  ))}
                </CircleGrid>
              </div>
              <div>
                <b>
                  <data>
                    {question.yes}/{question.total}
                  </data>
                </b>
                <br />
                <small>{question.question}</small>
              </div>
            </SurveyItem>
          ))}
        </div>

        <div className="mt2">
          <label>Key takeaways</label>

          <div className="md-two-columns lg-three-columns gap3">
            <small>
              The instant translation of messages is very useful, but some users
              want to be able to see the original, unedited message as well as
              the translated message.
            </small>

            <small>
              Users were surprised that there was no need to sign-up or download
              anything, and that this point was very convenient but about half
              of them asked if there was a mobile app.
            </small>
            <small>
              Positive feedback highlighted the real-time translation and ease
              of use without the need for downloads or signups.
            </small>

            <small>
              People who speak more than one language are less likely to find
              this app useful.
            </small>

            <small>
              Older users found the app difficult to use and thought that the
              font size is too small.
            </small>

            <small>
              Half of the users said they would create an account to use the
              app.
            </small>
          </div>
        </div>

        <section className="my4">
          <h4>High-level Mapping and User Journey Exercises</h4>
          <p>
            I have a detailed document prepared for the user journey mapping,
            highlighting the key touchpoints and interactions for each user
            persona.
          </p>
          <object
  data="https://mm.tt/app/map/3377771276?t=1d80Azl16T"
  type="text/html"
  style={{ border: "1px solid rgba(0, 0, 0, 0.1)", width: "100%", height: "450px" }}
>
  Your browser does not support embedded content. 
  <a href="https://mm.tt/app/map/3377771276?t=1d80Azl16T" target="_blank" rel="noopener noreferrer">
    Click here to view the mind map.
  </a>
</object>
        </section>

        <h4>Investigative Process during Project Lifecycle</h4>
        <p>Throughout the project lifecycle, I:</p>
        <ul>
          <li>Conducted iterative testing with a diverse group of users.</li>
          <li>Collected continuous feedback to refine features.</li>
          <li>
            Performed A/B testing to determine the most intuitive UI/UX designs.
          </li>
        </ul>
      </section>

      <section className="mt4">
        <h3>Mockups and HD Concepts</h3>
        <h4>Progressive Wireframe Evolution</h4>
        <p>
          While I used a{" "}
          <a href="https://mm.tt/app/map/3377771276?t=1d80Azl16T">mind map</a>{" "}
          instead of wireframes, this effectively guided the creation of the
          user journey and interface.
        </p>

        <h4>High-Fidelity Concepts</h4>
        <p>Developed an interactive Figma prototype showcasing:</p>
        <ul>
          <li>Fast user onboarding</li>
          <li>Easily switch between languages</li>
          <li>Easily create or join a chatroom</li>
          <li>Settings and customization options</li>
        </ul>
        <p>
          <strong>Features not conveyed in Figma:</strong>
        </p>
        <ul>
          <li>Translation</li>
          <li>Language detection</li>
          <li>Voice transcription</li>
          <li>Light/Dark mode</li>
        </ul>
        <div className="iphone-frame">
          <iframe
            title="`T-Chat` Figma Prototype"
            style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
            width="100%"
            height="450"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FINUShNpcGk0fqAYsZ1nUwo%2FT-Chat%3Fpage-id%3D0%253A1%26node-id%3D3121-427%26viewport%3D-3370%252C1333%252C0.58%26t%3D8UsjU9MZ0Mn1ym9l-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26starting-point-node-id%3D3121%253A427"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="mt4">
        <h3>Final Conclusions</h3>

        <h4>Challenges Faced and How They Were Tackled</h4>
        <ul>
          <li>
            <strong>API Costs:</strong> Managed by optimizing API calls and
            exploring cost-effective alternatives.
          </li>
          <li>
            <strong>Naming the Product:</strong> Currently considering better
            names to improve marketability.
          </li>
          <li>
            <strong>Product Marketing:</strong> Planning to leverage social
            media and partnerships.
          </li>
          <li>
            <strong>Browser Compatibility:</strong> Ensured optimal performance
            on Chromium-based browsers.
          </li>
        </ul>

        <h4>Notable Achievements or Successes</h4>
        <ul>
          <li>
            Successfully designed, engineered, and shipped a full-stack
            application independently.
          </li>
          <li>
            Achieved a high user satisfaction score, with positive feedback on
            the app’s usability and accuracy.
          </li>
        </ul>

        <h4>Positive and Negative Feedback</h4>
        <p>
          <strong>Positive Feedback:</strong>
          <ul>
            <li>Real-time translation is accurate and fast.</li>
            <li>
              Easy to join conversations without needing downloads or signups.
            </li>
            <li>Browser-based approach is highly convenient.</li>
          </ul>
        </p>
        <p>
          <strong>Negative Feedback:</strong>
          <ul>
            <li>Font size is too small.</li>
            <li>Cannot see the original untranslated message.</li>
          </ul>
        </p>

        <h4>Future Enhancements</h4>
        <ul>
          <li>Saving conversations</li>
          <li>Notifications</li>
          <li>Video chat with subtitles</li>
          <li>
            Ability to play YouTube videos or music in the background of a
            chatroom
          </li>
          <li>Adding friends/contacts</li>
          <li>Adjustable font size</li>
          <li>Toggle original, untranslated message on/off</li>
          <li>Light/Dark mode</li>
          <li>Join a chatroom with chatroom ID</li>
          <li>Voice transcription</li>
          <li>Rich metadata when sharing links</li>
          <li>Reply or react to messages</li>
          <li>End-to-end encryption</li>
          <li>More safety features</li>
        </ul>

        <h4>Future Business Features</h4>
        <ul>
          <li>Paid Ads for free users</li>
          <li>Sponsored chatrooms</li>
          <li>Chatrooms for small businesses/brands</li>
          <li>Enterprise level tier for customer service teams</li>
          <li>Payments</li>
          <li>Media uploads</li>
          <li>Other premium features</li>
        </ul>
      </section>

      <section className="mt4">
        <h3>Conclusion</h3>
        <p>
          The T-Chat project showcases my ability to lead a design effort from
          concept to implementation. It highlights my skills in user research,
          UI/UX design, and technical execution, aligning well with the goal of
          enhancing communication through technology.
        </p>
      </section>
    </div>
  );
};

export default TChat;
