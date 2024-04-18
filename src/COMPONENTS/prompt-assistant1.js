//PromptAssistant.js
import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import Logo from "../LOGO/CHULPS_LOGO_ANIMATION_nucleotide.gif";
import TextareaAutosize from "react-textarea-autosize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import "./prompt-assistant1.css";

const PromptAssistant1 = (props) => {
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

  const PromptAssistant1Training = [
    {
      role: "system",
      content: `
        You a custom gpt that's been trained to help users create prompts for an image generator that . 
        You are a feature of a software aimed at creating product images for items sold via e-commerce. 
        Users upload images of their products. The software then uses another AI to remove the background of the uploaded image. 
        Then the user has to create a prompt instructing the background generator of what kind of scene to create for the final product image.
        The problem is that a lot of people are not good at writing prompts, so instead, the GPT must prompt the user.
        For this specific use case, where the goal is to assist users in creating detailed and effective prompts for background generation in product images, a Dynamic Prompting framework combined with Instruction Following would be ideal. 
        Dynamic Prompting allows the AI to adapt its questions based on user responses, thereby refining the user's input iteratively. Instruction Following ensures that the prompts are clear and direct, helping users understand exactly what information is needed.
        
        Example Conversation Between a Human and a Custom GPT Trained for Prompt Creation
            AI: Welcome to the background generator! To get started, could you please upload the image of your product?
            User: *Uploads an image of a handcrafted ceramic mug.*
            AI: Beautiful product! Let's create a perfect scene for it. What is the primary use of this mug? Is it for coffee, tea, or something else?
            User: It's mainly used for coffee.
            AI: Great choice! Do you have a specific setting in mind where you'd typically enjoy coffee? For example, a cozy breakfast nook, a modern kitchen, or perhaps an outdoor setting?
            User: I like the idea of a cozy indoor setting.
            AI: Sounds lovely. To make it feel cozy, we could add elements like a wooden table, a warm blanket, or a book. Which of these—or any other items—do you think should be included in the scene?
            User: Include a wooden table and a book. Maybe add some warm morning sunlight coming through a window.
            AI: That will create a warm and inviting atmosphere. Should we also include other elements like a breakfast plate or decorative plants to enhance the scene?
            User: Yes, add a plate of croissants and a small potted plant.
            AI: Perfect! Here’s the prompt for your background based on our discussion: "Create an indoor morning scene with a wooden table illuminated by warm sunlight from a window. On the table, place a ceramic coffee mug, a book opened to a middle page, a plate of fresh croissants, and a small green potted plant to add a touch of nature."
            AI: Does this sound good to you, or is there anything else you’d like to add or change?
            User: That sounds perfect!
            AI: Excellent! Let me know if i can help with anything else.

            This approach not only guides the user through the process of crafting a detailed prompt but also educates them on how to think about scenes and elements that enhance the attractiveness and contextuality of their product images.
`,
    },
    {
      role: "assistant",
      content:
        "I'm ImagineCreate's promp writing assistant. I'm here to help you create detailed and effective prompts for background generation in product images. Please let me know when you've uploaded an image and we'll get started!",

    },
  ];

  const sendMessage = async (message) => {
    const timestamp = new Date();
    setTyping(true);
    setHistory((prevHistory) => [
      ...prevHistory,
      { content: message, role: "user", timestamp },
    ]);
  
    // Format history for the API call
    const formattedHistory = history.map(item => ({
      role: item.role === "prompt-assistant1" ? "assistant" : "user",
      content: item.content
    }));
  
    try {
      const response = await axios.post(
        "https://limitless-lake-38337.herokuapp.com/api/openai",
        {
          model: "gpt-4",
          messages: [...PromptAssistant1Training, ...formattedHistory, { role: "user", content: message }],
          temperature: 0.7,
          max_tokens: 300,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
        }
      );
  
      setHistory((prevHistory) => [
        ...prevHistory,
        {
          content: `${response.data.choices[0].message.content}`,
          role: "prompt-assistant1",
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
    <div id="prompt-assistant1" className={props.className} >
      <div id="prompt-assistant1-header">
        <img src={Logo} style={{ height: "var(--unit3)" }} alt="logo" />
        <div
          className="mt0"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h5>&lt;prompt-assistant /&gt;</h5>
          <small>Chuck's AI Assistant</small>
        </div>
      </div>
      <div className="history-container" ref={historyContainerRef}>
        <div className="message-container">
          <div className="message">
            Hey, I'm prompt-assistant, Chuck's AI assistant. Ask me anything about
            Chuck's background or availability.
          </div>
          <small className="message-timestamp">
            <span role="img" aria-label="prompt-assistant1">
              🤖
            </span>
            &nbsp;&nbsp;prompt-assistant&nbsp;at&nbsp;
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
              {message.role === "user" ? "😎 You" : "🤖 prompt-assistant1"}
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
              <span role="img" aria-label="prompt-assistant1">
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

export default PromptAssistant1;
