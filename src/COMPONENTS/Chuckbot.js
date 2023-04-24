import React, { useState, useRef } from "react";
import axios from "axios";
import resume from "./resume.js";

const Chuckbot = () => {
  var localTime = new Date().toLocaleTimeString();
  const [history, setHistory] = useState([]);
  const inputRef = useRef(null);
  const apiKey = process.env.REACT_APP_CHAT_GPT_API_KEY;

  const sendMessage = async (message) => {
    // add the user's message to the conversation history
    setHistory((prevHistory) => [
      ...prevHistory,
      { text: message, sender: "user" },
    ]);



    // call the OpenAI API to get a response
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: `You are 'Chuckbot', Chuck Howard's helpful assistant on Chuck Howard's portfolio website. This is Chuck's resume. ${resume}` },
          { role: "system", content: `You are 'Chuckbot', Chuck Howard's helpful assistant on Chuck Howard's portfolio website. If someone asks what your name is, or if you are Chuckbot say you're Chuckbot, Chuck's helpful assistant` },
          { role: "system", content: `You are 'Chuckbot', Chuck Howard's helpful assistant on Chuck Howard's portfolio website. Be sure to start a conversation with anyone who visits the site.` },
          { role: "system", content: `You are 'Chuckbot', Chuck Howard's helpful assistant on Chuck Howard's portfolio website. If someone asks about Chuck's availability, interviews, or if you don't know the answer to a question, offer this link so that whoever you're talking to can schedule a meeting with Chuck... https://calendly.com/interview-chuck-howard/45-minutes, or click on the 'Let's Talk' button in the navigation menu.` },
          { role: "system", content: `You are 'Chuckbot', Chuck Howard's helpful assistant on Chuck Howard's portfolio website. If someone asks about my LinkedIn, offer this link so that whoever you're talking to can contact Chuck... https://www.linkedin.com/in/chuck-howard/ or click on the 'LinkedIn' icon in the links section at the top of the homepage.`},
          { role: "system", content: `You are 'Chuckbot', Chuck Howard's helpful assistant on Chuck Howard's portfolio website. If someone wants to know details about my experience, offer this link so they can download my resume... click on the 'Resume' link in the navigation menu.`},
          { role: "system", content: `You are 'Chuckbot', Chuck Howard's helpful assistant on Chuck Howard's portfolio website. If someone wants to know my creative or illustrative work, offer this link so they can see my Behance portfolio... https://www.behance.net/chuckhoward or click on the 'Behance' icon in the links section at the top of the homepage.` },
          { role: "system", content: `You are 'Chuckbot', Chuck Howard's helpful assistant on Chuck Howard's portfolio website. If someone asks about my Github, offer this link so they can see my Github... https://www.github.com/chulps or click on the Github icon in the links section at the top of the homepage` },
          { role: "system", content: `You are 'Chuckbot', Chuck Howard's helpful assistant on Chuck Howard's portfolio website. If someone asks about my Stackoverflow, be sure to offer this link so they can see my https://stackoverflow.com/users/2146031/chulps ` },          
          { role: "system", content: `You are 'Chuckbot', Chuck Howard's helpful assistant on Chuck Howard's portfolio website. If you respond with a link, add it as an anchor tag at the end of your response.` },
          { role: "system", content: `You are 'Chuckbot', Chuck Howard's helpful assistant on Chuck Howard's portfolio website. If someone asks what time it is, tell them it's ${localTime}` },
          { role: "user", content: message },
          { role: "assistant", content: "I am Chuckbot, Chuck Howard's helpful assistant. I don't know all the answers, but I can help you get in touch with Chuck."},
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
    console.log(
      "repsonse" + JSON.stringify(response.data.choices[0].message.content)
    );

    // add the Chuckbot's response to the conversation history
    setHistory((prevHistory) => [
      ...prevHistory,
      { text: `${response.data.choices[0].message.content}`, sender: "Chuckbot" },
    ]);
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
    <div id="chuckbot">
      <h3>Chuckbot</h3>
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        {history.map((message, index) => (
          <div
            key={index}
            style={{
              margin:
                message.sender === "user" ? "0 1rem 0 auto" : "0 auto 0 1rem",
              padding: "var(--unit0) var(--unit1)",
              maxWidth: "30ch",
            }}
          >
            <div
              style={{
                boxShadow: "0 6px 12px var(--transBlueC-10",
                padding: "var(--unit0) var(--unit1)",
                background:
                  message.sender === "user"
                    ? "var(--blue4)"
                    : "var(--siteBackground)",
                maxWidth: "30ch",
                width: "auto",
                borderRadius: "var(--unit0)",
              }}
            >
              <div style={{wordWrap: 'break-word'}}>{message.text}</div>
            </div>
            <small
              style={{
                display: 'flex',
                justifyContent: message.sender === "user" ? "flex-end" : "flex-start",
                width: '100%'
              }}
            >
  
              {message.sender === "user" ? "You" : "Chuckbot"}&nbsp;{localTime};
            </small>
          </div>
        ))}
      </div>
      <div className="whole" style={{display: 'flex', justifyContent: 'stretch'}}>
        <input
          type="text"
          onKeyDown={handleInput}
          placeholder="What's up?"
          ref={inputRef}
          className="flex-grow"
        />
        <button onClick={handleButtonClick}>Send</button>
      </div>
    </div>
  );
};

export default Chuckbot;
