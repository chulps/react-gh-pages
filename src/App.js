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
import { useState, useEffect } from "react";
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

  const toggleChatbot = () => {
    setChatbotVisible(!chatbotVisible);
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
        <main style={{ background: "var(--siteBackground)" }}>
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
        <a
          className="md-ghost fixed"
          style={{ bottom: "var(--unit1)", right: "var(--unit1)" }}
          href="https://calendly.com/interview-chuck-howard/30-minutes"
          target="_blank"
          rel="noreferrer"
        >
          {/* <button
            className="green flex-vertical flex-center pb0"
            style={{
              borderRadius:
                "var(--unit3) var(--unit3) var(--unit3) var(--unit1",
              fontWeight: "normal",
            }}
          >
            <FontAwesomeIcon icon={solid("calendar")} />
            <small>Availability</small>
          </button> */}
        </a>
        <Footer />

        <div className="feedback">
          <a
            href="https://surveyjs.io/published?id=ff31bf9f-0060-4d4e-8fef-0d34c1768024"
            rel="noreferrer"
            target="_blank"
          >
            <button className="btn3 small">
              <FontAwesomeIcon icon={solid("comments")} />
              &nbsp;Feedback
            </button>
          </a>
        </div>
      </HashRouter>
              {chatbotVisible && <Chuckbot />}

        <button className={`${chatbotVisible ? 'chatbot-open-toggle btn3 small' : 'chatbot-toggle cta'}`} onClick={toggleChatbot}>
          {chatbotVisible ? (
            <FontAwesomeIcon icon={solid("xmark")} />
          ) : (
            <FontAwesomeIcon icon={solid("robot")} />
        )}
        </button>
    </div>
  );
};

export default App;
