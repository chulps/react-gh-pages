//ChuckGPT.js
import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import Logo from "../LOGO/CHULPS_LOGO_ANIMATION_nucleotide.gif";
import TextareaAutosize from "react-textarea-autosize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import "./ChuckGPT.css";
import ChuckGPTTraining from "./ChuckGPTTraining.js";

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
      { content: message, role: "user", timestamp },
    ]);
  
    // Format history for the API call
    const formattedHistory = history.map(item => ({
      role: item.role === "ChuckGPT" ? "assistant" : "user",
      content: item.content
    }));
  
    try {
      const response = await axios.post(
        "https://limitless-lake-38337.herokuapp.com/api/openai",
        {
          model: "gpt-4",
          messages: [...ChuckGPTTraining, ...formattedHistory, { role: "user", content: message }],
          temperature: 0.7,
          max_tokens: 180,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
        }
      );
  
      setHistory((prevHistory) => [
        ...prevHistory,
        {
          content: `${response.data.choices[0].message.content}`,
          role: "ChuckGPT",
          timestamp,
        },
      ]);
      setTyping(false);
  
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
            Hey, I'm ChuckGPT, Chuck's AI assistant. Ask me anything about Chuck's background or availability.
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
                message.role === "user"
                  ? "0 0 var(--unit1) auto"
                  : "0 auto var(--unit1) 0",
            }}
          >
            <div
              className="message"
              style={{
                wordWrap: "break-word",
                background:
                  message.role === "user"
                    ? "var(--blue1)"
                    : "var(--siteBackground)",
                color: message.role === "user" ? "white" : "inherit",
              }}
            >
              {message.content}
            </div>
            <small
              className="message-timestamp"
              style={{
                justifyContent:
                  message.role === "user" ? "flex-end" : "flex-start",
              }}
            >
              &nbsp;
              {message.role === "user" ? "😎 You" : "🤖 ChuckGPT"}
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
