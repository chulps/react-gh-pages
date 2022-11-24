import Header from "./COMPONENTS/HEADER/Header.js";
import Home from "./COMPONENTS/PAGES/HOME/Home.js";
import Nucleotide from "./COMPONENTS/PAGES/NUCLEOTIDE/Nucleotide.js";
import CRIGenetics from "./COMPONENTS/PAGES/CRIGENETICS/CRIGenetics.js";
import Yarden from "./COMPONENTS/PAGES/YARDEN/Yarden.js";
import Clicktool from "./COMPONENTS/PAGES/CLICKTOOL/Clicktool.js";
import Footer from "./COMPONENTS/FOOTER/Footer.js";
import Covid from "./COMPONENTS/PAGES/COVID/Covid.js";
import Foundry from "./COMPONENTS/PAGES/FOUNDRY/Foundry.js";
import Feedback from "./COMPONENTS/PAGES/FEEDBACK/Feedback";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import "./App.css";

import { HashRouter, Routes, Route } from "react-router-dom";
import ProjectSection from "./COMPONENTS/ProjectsSection.js";

function App() {
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
            <Route path="/feedback/" element={<Feedback />} />
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
          <a href="https://surveyjs.io/published?id=ff31bf9f-0060-4d4e-8fef-0d34c1768024" >
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
