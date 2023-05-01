import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import Logo from "../LOGO/CHULPS_LOGO_ANIMATION_nucleotide.gif";
import TextareaAutosize from "react-textarea-autosize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import "./ChuckGPT.css";
import ReactGA4 from "react-ga4";
import ChuckGPTTraining from "./ChuckGPTTraining.js";

const time = new Date().toLocaleTimeString([], {
  hour: "2-digit",
  minute: "2-digit",
});

const ChuckGPT = (props) => {
  const [history, setHistory] = useState([]);
  const [typing, setTyping] = useState(false);
  const inputRef = useRef(null);
  const historyContainerRef = useRef(null);

  useEffect(() => {
    if (typing) {
      const timer = setTimeout(() => setTyping(false), 5000);
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
    const timestamp = new Date();
    setTyping(true);
    setHistory((prevHistory) => [
      ...prevHistory,
      { text: message, sender: "user", timestamp },
    ]);

    try {
      const response = await axios.post(
        "https://limitless-lake-38337.herokuapp.com/api/openai",
        {
          model: "gpt-3.5-turbo",
          messages: [...ChuckGPTTraining, { role: "user", content: message }],
          temperature: 0.7,
          max_tokens: 80,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
        }
      );

      setHistory((prevHistory) => [
        ...prevHistory,
        {
          text: `${response.data.choices[0].message.content}`,
          sender: "ChuckGPT",
          timestamp,
        },
      ]);
      setTyping(false);

      // Send GA4 event with message content and user location data
      const ipAddress = await axios
        .get("https://api.ipify.org?format=json")
        .then((res) => res.data.ip);
      const locationResponse = await axios.get(
        `https://geolocation-db.com/json/${ipAddress}`
      );
      const location = locationResponse.data;
      ReactGA4.event({
        category: "ChuckGPT Message",
        action: `Message from: ${ipAddress}`,
        label: message, // optional
        location: `${location.city}, ${location.country_name}`,
      });

      if (typeof props.onNewMessage === "function") {
        props.onNewMessage();
      }
    } catch (error) {
      console.error("Error calling backend:", error.message);
      setTyping(false);
    }
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
      "https://calendly.com/interview-chuck-howard/45-minute-meeting":
        "schedule a meeting with Chuck",
      "https://www.linkedin.com/in/chuck-howard/": "visit Chuck's LinkedIn",
      "https://www.behance.net/chuckhoward": "view Chuck's Behance portfolio",
      "https://www.github.com/chulps": "check out Chuck's Github",
      "https://stackoverflow.com/users/2146031/chulps":
        "explore Chuck's Stackoverflow profile",
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
    <div id="ChuckGPT" className={props.className} style={props.style}>
      <div id="ChuckGPT-header">
        <img src={Logo} style={{ height: "var(--unit3)" }} alt="logo" />
        <div
          className="mt0"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h5>&lt;ChuckGPT /&gt;</h5>
          <small>Chuck's AI Assistant</small>
        </div>
      </div>
      <div className="history-container" ref={historyContainerRef}>
        <div className="message-container">
          <div className="message">
            Hey I'm ChuckGPT, Chuck's AI assistant. Let me know if you have any
            questions about Chuck's background or availability.
          </div>
          <small className="message-timestamp">
            <span role="img" aria-label="ChuckGPT">
              🤖
            </span>
            &nbsp;&nbsp;ChuckGPT&nbsp;at&nbsp;
            {new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </small>
        </div>

        {history.map((message, index) => (
          <div
            key={index}
            className="message-container"
            style={{
              margin:
                message.sender === "user"
                  ? "0 0 var(--unit1) auto"
                  : "0 auto var(--unit1) 0",
            }}
          >
            <div
              className="message"
              style={{
                wordWrap: "break-word",
                background:
                  message.sender === "user"
                    ? "var(--blue1)"
                    : "var(--siteBackground)",
                color: message.sender === "user" ? "white" : "inherit",
              }}
            >
              {formatMessage(message.text)}
            </div>
            <small
              className="message-timestamp"
              style={{
                justifyContent:
                  message.sender === "user" ? "flex-end" : "flex-start",
              }}
            >
              &nbsp;
              {message.sender === "user" ? "😎 You" : "🤖 ChuckGPT"}
              &nbsp;at&nbsp;
              {message.timestamp.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        ))}
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
        {typing && (
          <div className="message-container typing-message">
            <div className="message">
              <p className="typing-indicator p0">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </p>
            </div>
            <small className="message-timestamp">
              <span role="img" aria-label="ChuckGPT">
                🤖
              </span>
              Typing...
            </small>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChuckGPT;
