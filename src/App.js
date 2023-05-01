import Header from "./COMPONENTS/HEADER/Header.js";
import Home from "./COMPONENTS/PAGES/HOME/Home.js";
import Nucleotide from "./COMPONENTS/PAGES/NUCLEOTIDE/Nucleotide.js";
import CRIGenetics from "./COMPONENTS/PAGES/CRIGENETICS/CRIGenetics.js";
import Yarden from "./COMPONENTS/PAGES/YARDEN/Yarden.js";
import Xprize from "./COMPONENTS/PAGES/XPRIZE/Xprize.js";
import Clicktool from "./COMPONENTS/PAGES/CLICKTOOL/Clicktool.js";
import Footer from "./COMPONENTS/FOOTER/Footer.js";
import Covid from "./COMPONENTS/PAGES/COVID/Covid.js";
import Foundry from "./COMPONENTS/PAGES/FOUNDRY/Foundry.js";
import Resume from "./COMPONENTS/PAGES/RESUME/Resume.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { HashRouter, Routes, Route } from "react-router-dom";
import ProjectSection from "./COMPONENTS/ProjectsSection.js";
import Chuckbot from "./COMPONENTS/Chuckbot.js";
import ReactGA from "react-ga4";
import DesignProcess from "./COMPONENTS/PAGES/DESIGN-PROCESS/DesignProcess.js";
const TRACKING_ID = "G-WV7JW98XHS"; // ga4 tracking ID
ReactGA.initialize(TRACKING_ID);

const App = () => {
  const [chatbotVisible, setChatbotVisible] = useState(false);
  const [unreadMessagesCount, setUnreadMessagesCount] = useState(1);

  const incrementUnreadMessagesCount = () => {
    setUnreadMessagesCount((prevCount) => prevCount + 1);
  };

  const toggleChatbot = () => {
    setChatbotVisible(!chatbotVisible);
    setUnreadMessagesCount(0);
  };

  //creating IP state
  const [ip, setIP] = useState("");

  //creating function to load ip address from the API
  const getData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    setIP(res.data.IPv4);
  };

  useEffect(() => {
    //passing getData method to the lifecycle method
    getData();
  }, []);

  ReactGA.event({
    category: "visitor_ip",
    action: `${ip}`,
  });

  return (
    <div id="chuck" className="App nucleotide">
      <HashRouter forceRefresh={true}>
        <Header />

        {/* site content renders here */}
        <main
          style={{ background: "var(--siteBackground)", position: "relative" }}
        >
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/projects/xprize/" element={<Xprize />} />
            <Route path="/projects/crigenetics/" element={<CRIGenetics />} />
            <Route path="/projects/foundry/" element={<Foundry />} />
            <Route path="/projects/nucleotide/" element={<Nucleotide />} />
            <Route path="/projects/yarden/" element={<Yarden />} />
            <Route path="/projects/clicktool/" element={<Clicktool />} />
            <Route path="/projects/covid/" element={<Covid />} />
            <Route path="/resume/" element={<Resume />} />
            <Route path="/design-process" element={<DesignProcess />} />
          </Routes>
        </main>

        <ProjectSection />
        <Footer />

        <div className="feedback">
          <a
            href="https://surveyjs.io/published?id=ff31bf9f-0060-4d4e-8fef-0d34c1768024"
            rel="noopener noreferrer"
            target="_blank"
          >
            <button className="btn3 small">
              <FontAwesomeIcon icon={solid("comments")} />
              &nbsp;Feedback
            </button>
          </a>
        </div>
      </HashRouter>
      <Chuckbot
        style={{ transform: `scale(${chatbotVisible ? 1 : 0})` }}
        onNewMessage={incrementUnreadMessagesCount}
      />
      <button
        className={`${
          chatbotVisible
            ? "chatbot-open-toggle btn3 small red py1"
            : "chatbot-toggle cta p1"
        } flex-vertical flex-center`}
        onClick={toggleChatbot}
      >
        {chatbotVisible ? (
          <FontAwesomeIcon className="h4 p-none" icon={solid("xmark")} />
        ) : (
          <FontAwesomeIcon
            className="h4 p-none"
            style={{ marginBottom: "0.25em" }}
            icon={solid("robot")}
          />
        )}
              <small
        className={`unread-badge ${
          chatbotVisible || unreadMessagesCount === 0 ? "hidden" : ""
        }`}
      >
        {unreadMessagesCount}
      </small>
      </button>

    </div>
  );
};

export default App;
