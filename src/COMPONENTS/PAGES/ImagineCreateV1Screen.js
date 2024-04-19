// ImagineCreateV1Screen.js
import React, { useState } from "react";
import PromptAssistant1 from "../prompt-assistant1.js";
import "./imagine-create-v1-screen.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

function ImagineCreateV1Screen() {
  const [chatbotVisible, setChatbotVisible] = useState(false);

  const toggleChatbot = () => {
    console.log("Toggle Chatbot:", !chatbotVisible); // Check the current intended state
    setChatbotVisible(!chatbotVisible);
  };

  return (
    <div id="imagine-create-v1-screen">
      
      <aside id="ic-left-column" className="flex-vertical flex-space-between flex-center">
        <div className="flex-vertical gap1 flex-center">
          <button className="small btn2">
            <FontAwesomeIcon icon={solid("house")} />
          </button>
          <button className="small btn2">
            <FontAwesomeIcon icon={solid("window-maximize")} />
          </button>
          <button className="small btn2">
            <FontAwesomeIcon icon={solid("video")} />
          </button>
          <button className="small btn2">
            <FontAwesomeIcon icon={solid("list")} />
          </button>
        </div>
        <div className="flex-vertical gap1 flex-center">
          <button className="small btn2">𝕏</button>
          <button className="small btn2">📸</button>
          <button className="small btn2">🎵</button>
          <button className="small btn2">✉️</button>
        </div>
      </aside>

      <main className="px4">
        <div style={{gap: 'var(--unit2)', display: 'flex', justifyContent: 'center', marginBottom: 'var(--unit2)'}}>
            <select className="card" style={{padding: 'var(--unit1) var(--unit2)'}}>
                <option value="">Size</option>
                <option value="16:9">16:9</option>
            </select>
            <select className="card" style={{padding: 'var(--unit1) var(--unit2)'}}>
                <option value="">Number of Variations</option>
                <option value="1">1</option>
            </select>
        </div>
        <div className="input-and-button-container gap1">
          <div style={{ display: "flex" }} className="gap1">
            <div style={{ display: "flex", flexGrow: 1, position: "relative" }}>
              <input
                style={{ flexGrow: 1 }}
                placeholder="Describe the scene around your product..."
              />
              <button
                className="chat-send-button small"
                style={{ position: "absolute", right: 0, top: 9 }}
              >
                <FontAwesomeIcon icon={solid("paper-plane")} />
              </button>
            </div>
            <button className="btn2" onClick={() => toggleChatbot()}>
              🤖 Prompt Assistant
            </button>
          </div>
          <div className="flex-center bg-blue4 shadowDown" style={{width: '100%', aspectRatio: '16/9'}}>
            img placeholder
          </div>
        </div>
      </main>

      <aside id="ic-right-column" className="flex-vertical" style={{gap: 'var(--unit1)'}}>
        <div className="card">Upload images</div>

        <div className="card">Create</div>

        <div className="card gap1">
          <div>Share</div>
          <button>Save</button>
          <button>Download</button>
          <button>Generate Video</button>
        </div>
      </aside>

      {chatbotVisible && (
        <PromptAssistant1 onClose={() => setChatbotVisible(false)} />
      )}
    </div>
  );
}

export default ImagineCreateV1Screen;
