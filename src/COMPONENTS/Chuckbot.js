import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import resume from "./resume.js";
import Logo from "../LOGO/CHULPS_LOGO_ANIMATION_nucleotide.gif";
import TextareaAutosize from "react-textarea-autosize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import "./Chuckbot.css";

const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
let timeAndDate = `${new Date().toLocaleString}`;
console.log(timeAndDate)
const Chuckbot = () => {
  const [history, setHistory] = useState([]);
  const [typing, setTyping] = useState(false);
  const inputRef = useRef(null);
  const historyContainerRef = useRef(null);
  const apiKey = process.env.REACT_APP_CHAT_GPT_API_KEY;

  useEffect(() => {
    if (typing) {
      const timer = setTimeout(() => setTyping(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [typing]);

  useEffect(() => {
    if (historyContainerRef.current) {
      historyContainerRef.current.scrollTop =
        historyContainerRef.current.scrollHeight;
    }
  }, [history, typing]);

  const sendMessage = async (message) => {
    setTyping(true);
    setHistory((prevHistory) => [
      ...prevHistory,
      { text: message, sender: "user" },
    ]);

    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `If someone asks for the date or time, use this information to give an answer ${timeAndDate}`,
          },
          {
            role: "system",
            content: `You are 'Chuckbot', Chuck Howard's helpful assistant on Chuck Howard's portfolio website. This is Chuck's resume with his skills and experience... ${resume}`,
          },
          {
            role: "system",
            content: `If someone asks what your name is, or if you are Chuckbot say you're Chuckbot, Chuck's helpful assistant`,
          },
          {
            role: "system",
            content: `Use emojis to emphasize your point. For example, if someone asks if you are Chuckbot, say you're Chuckbot, Chuck's helpful assistant 😎`,
          },
          {
            role: "system",
            content: `Be sure to start a conversation with anyone who visits the site.`,
          },
          {
            role: "system",
            content: `If someone asks about Chuck's availability, interviews, or if you don't know the answer to a question, say you're not sure, and offer this link so that whoever you're talking to can schedule a meeting with Chuck... https://calendly.com/interview-chuck-howard/45-minutes, or click on the 'Let's Talk' button in the navigation menu.`,
          },
          {
            role: "system",
            content: `If someone asks about my LinkedIn, offer this link so that whoever you're talking to can contact Chuck... https://www.linkedin.com/in/chuck-howard/ or click on the 'LinkedIn' icon in the links section at the top of the homepage.`,
          },
          {
            role: "system",
            content: `If someone wants to know details about my experience, offer this link so they can download my resume... click on the 'Resume' link in the navigation menu.`,
          },
          {
            role: "system",
            content: `If someone wants to know my creative or illustrative work, offer this link so they can see my Behance portfolio... https://www.behance.net/chuckhoward or click on the 'Behance' icon in the links section at the top of the homepage.`,
          },
          {
            role: "system",
            content: `If someone asks about my Github, offer this link so they can see my Github... https://www.github.com/chulps or click on the Github icon in the links section at the top of the homepage`,
          },
          {
            role: "system",
            content: `If someone asks about my Stackoverflow, be sure to offer this link so they can see my https://stackoverflow.com/users/2146031/chulps `,
          },
          {
            role: "system",
            content: `If you respond with a link, add it as a clickable link at the end of your response.`,
          },
          {
            role: "system",
            content: `If someone asks for my phone number, email, or mailing address, tell them I don't deliberately don't post such information on my website to prevent scams, spams, and traffic jams.`,
          },
          {
            role: "assistant",
            content:
              "I am Chuckbot, Chuck Howard's helpful assistant. I don't know all the answers, but I can help you get in touch with Chuck.",
          },
          { role: "user", content: message },
        ],
        temperature: 0.7,
        max_tokens: 80,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    setHistory((prevHistory) => [
      ...prevHistory,
      {
        text: `${response.data.choices[0].message.content}`,
        sender: "Chuckbot",
      },
    ]);
    setTyping(false);
  };

  const handleInput = (e) => {
    if (e.key === "Enter") {
      const message = e.target.value;
      sendMessage(message);
      e.target.value = "";
    }
  };

  const handleButtonClick = () => {
    const message = inputRef.current.value;
    sendMessage(message);
    inputRef.current.value = "";
  };

const formatMessage = (text) => {
  const urlRegex = /(https?:\/\/[^\s]+(?:(?<![.,?!\-:;])|$))/g;
const linkTextMap = {
  "https://calendly.com/interview-chuck-howard/45-minute-meeting": "schedule a meeting with Chuck",
  "https://www.linkedin.com/in/chuck-howard/": "visit Chuck's LinkedIn",
  "https://www.behance.net/chuckhoward": "view Chuck's Behance portfolio",
  "https://www.github.com/chulps": "check out Chuck's Github",
  "https://stackoverflow.com/users/2146031/chulps": "explore Chuck's Stackoverflow profile",
  // Add more links and their corresponding descriptions here
};
  return text.split(urlRegex).map((part, i) => {
    if (part.match(urlRegex)) {
      const linkText = linkTextMap[part] || part;
      return (
        <a key={i} href={part} target="_blank" rel="noopener noreferrer">
          {linkText}
        </a>
      );
    } else {
      return part;
    }
  });
};



  return (
    <div id="chuckbot">
      <div id="chuckbot-header">
        <img src={Logo} style={{ height: "var(--unit3)" }} alt="logo" />
        <h5>Chuckbot</h5>
        <small>Say something</small>
      </div>
      <div className="history-container" ref={historyContainerRef}>
        <div
          style={{ display: "flex", flexDirection: "column", width: "100%", position: "relative" }}
        >
          <div
            className="message-container"
            style={{
              margin: "0 auto 0 var(--unit1)",
              padding: "var(--unit0) 0",
              maxWidth: "30ch",
              flexShrink: 1,
            }}
          >
            <div
              style={{
                boxShadow: "0 6px 12px var(--transBlueC-10",
                padding: "var(--unit0) var(--unit1)",
                background: "var(--siteBackground)",
                color: "inherit",
                maxWidth: "30ch",
                width: "auto",
                borderRadius: "var(--unit0)",
              }}
            >
              <div style={{ wordWrap: "break-word" }}>Hey I'm Chuckbot, Chuck's AI assistant. Let me know if you have any questions about Chuck's background or availability.</div>
            </div>
            <small
              style={{
                display: "flex",
                justifyContent: "flex-start",
                width: "100%",
              }}
            >
              &nbsp;🤖 Chuckbot&nbsp;at&nbsp;{time};
            </small>
          </div>

          {history.map((message, index) => (
            <div
              key={index}
              className="message-container"
              style={{
                margin:
                  message.sender === "user" ? "0 var(--unit1) 0 auto" : "0 auto 0 var(--unit1)",
                padding: "var(--unit0) 0",
                maxWidth: "30ch",
                flexShrink: 1,
              }}
            >
              <div
                style={{
                  boxShadow: "0 6px 12px var(--transBlueC-10",
                  padding: "var(--unit0) var(--unit1)",
                  background:
                    message.sender === "user"
                      ? "var(--blue1)"
                      : "var(--siteBackground)",
                  color: message.sender === "user" ? "white" : "inherit",
                  maxWidth: "30ch",
                  width: "auto",
                  borderRadius: "var(--unit0)",
                }}
              >
<div style={{ wordWrap: "break-word" }}>{formatMessage(message.text)}</div>
              </div>
              <small
                style={{
                  display: "flex",
                  justifyContent:
                    message.sender === "user" ? "flex-end" : "flex-start",
                  width: "100%",
                }}
              >
                &nbsp;
                {message.sender === "user" ? "😎 You" : "🤖 Chuckbot"}&nbsp;
                {time}
              </small>
            </div>
          ))}
          {typing && (
            <div className="typing-indicator">
              Typing&nbsp;
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
        </div>
      </div>
      <div className="chat-input-container">
<TextareaAutosize
  minRows={1}
  maxRows={3}
          onKeyDown={handleInput}
          
  placeholder="Ask anything!"
  ref={inputRef}
  className="chat-input whole"
/>

        <button className="chat-send-button small" onClick={handleButtonClick}>
          <FontAwesomeIcon icon={solid("paper-plane")} />
        </button>
      </div>
    </div>
  );
};

export default Chuckbot;
