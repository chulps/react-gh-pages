import Header from "./COMPONENTS/HEADER/Header.js";
import Home from "./COMPONENTS/PAGES/HOME/Home.js";
import Nucleotide from "./COMPONENTS/PAGES/NUCLEOTIDE/Nucleotide.js";
import CRIGenetics from "./COMPONENTS/PAGES/CRIGENETICS/CRIGenetics.js";
import Yarden from "./COMPONENTS/PAGES/YARDEN/Yarden.js";
import Clicktool from "./COMPONENTS/PAGES/CLICKTOOL/Clicktool.js";
import Footer from "./COMPONENTS/FOOTER/Footer.js";
import Covid from "./COMPONENTS/PAGES/COVID/Covid.js";
import Foundry from "./COMPONENTS/PAGES/FOUNDRY/Foundry.js";

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
            <Route
              path="/crigenetics/"
              element={<CRIGenetics />}
            />
            <Route
              path="/foundry/"
              element={<Foundry />}
            />
            <Route
              path="/nucleotide/"
              element={<Nucleotide />}
            />

            
            <Route path="/yarden/" element={<Yarden />} />
            <Route path="/clicktool/" element={<Clicktool />} />
            <Route path="/covid/" element={<Covid />} />
          </Routes>
        </main>

        <ProjectSection />

          <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
