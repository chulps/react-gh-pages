import React, { useState } from "react";
import PromptAssistant1 from "../prompt-assistant1.js";

function ImagineCreateV1Screen() {
    const [chatbotVisible, setChatbotVisible] = useState(false);
  
    const toggleChatbot = () => {
      setChatbotVisible(!chatbotVisible);
    };

  return (
    <section id="imagine-create-v1-screen" className="hero flex-center">
      <div style={{ display: "flex" }} className="gap1 width7">
        <input style={{ flexGrow: 1 }} placeholder="Describe the scene around your product..." />
        <button className="btn2" onClick={toggleChatbot}>Prompt Assistant</button>
        
      </div>

      <PromptAssistant1
        style={{ transform: `scale(${chatbotVisible ? 1 : 0})` }}
      />
    </section>
  );
}

export default ImagineCreateV1Screen;
