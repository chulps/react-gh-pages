import Header from "./COMPONENTS/HEADER/Header.js";
import Home from "./COMPONENTS/PAGES/HOME/Home.js";
import Nucleotide from "./COMPONENTS/PAGES/NUCLEOTIDE/Nucleotide.js";
import CRIGenetics from "./COMPONENTS/PAGES/CRIGENETICS/CRIGenetics.js";
import Yarden from "./COMPONENTS/PAGES/YARDEN/Yarden.js";
import Clicktool from "./COMPONENTS/PAGES/CLICKTOOL/Clicktool.js";
import Footer from "./COMPONENTS/FOOTER/Footer.js";
import Covid from "./COMPONENTS/PAGES/COVID/Covid.js";
import Foundry from "./COMPONENTS/PAGES/FOUNDRY/Foundry.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { HashRouter, Routes, Route } from "react-router-dom";
import ProjectSection from "./COMPONENTS/ProjectsSection.js";

import ReactGA from "react-ga4";
const TRACKING_ID = "G-WV7JW98XHS"; // ga4 tracking ID
ReactGA.initialize(TRACKING_ID);
console.log(TRACKING_ID);

function App() {
  //creating IP state
  const [ip, setIP] = useState("");
  const [IPCountry, setIPCountry] = useState("");

  //creating function to load ip address from the API
  const getData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    console.log(res.data);
    setIP(res.data.IPv4);
    setIPCountry(res.data.country_name);
    console.log(IPCountry);
  };

  useEffect(() => {
    //passing getData method to the lifecycle method
    getData();
  }, []);

  console.log(ip + " " + IPCountry );

  ReactGA.event({
    category: "user_info",
    action: "Visitor_IP",
    label: ip + " " + IPCountry, 
    nonInteraction: true, // optional, true/false
  });

  return (
    <div id="chuck" className="App nucleotide">
      <HashRouter forceRefresh={true}>
        <Header />

        {/* site content renders here */}
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/crigenetics/" element={<CRIGenetics />} />
            <Route path="/foundry/" element={<Foundry />} />
            <Route path="/nucleotide/" element={<Nucleotide />} />
            <Route path="/yarden/" element={<Yarden />} />
            <Route path="/clicktool/" element={<Clicktool />} />
            <Route path="/covid/" element={<Covid />} />
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
          <button
            className="green flex-vertical flex-center pb0"
            style={{
              borderRadius:
                "var(--unit3) var(--unit3) var(--unit3) var(--unit1",
              fontWeight: "normal",
            }}
          >
            <FontAwesomeIcon icon={solid("calendar")} />
            <small>Interview</small>
          </button>
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
    </div>
  );
}

export default App;
