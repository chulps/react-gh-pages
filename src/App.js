import Header from "./COMPONENTS/HEADER/Header.js";
import Home from "./COMPONENTS/PAGES/HOME/Home.js";
import Nucleotide from "./COMPONENTS/PAGES/NUCLEOTIDE/Nucleotide.js";
import CRIGenetics from "./COMPONENTS/PAGES/CRIGENETICS/CRIGenetics.js";
import Yarden from "./COMPONENTS/PAGES/YARDEN/Yarden.js";
import Clicktool from "./COMPONENTS/PAGES/CLICKTOOL/Clicktool.js";
import ClicktoolHomepage from "./COMPONENTS/PAGES/CLICKTOOL/CLICKTOOL_HOMEPAGE/Home.js"
import Footer from "./COMPONENTS/FOOTER/Footer.js";
import Covid from "./COMPONENTS/PAGES/COVID/Covid.js";
import Foundry from "./COMPONENTS/PAGES/FOUNDRY/Foundry.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectSection from "./COMPONENTS/ProjectsSection.js";

function App() {
  return (
    <div id="chuck" className="App nucleotide">
      <BrowserRouter forceRefresh={true}>
        
        <Routes>
            <Route
              path="/clicktool/clicktool_homepage/"
              element={<ClicktoolHomepage />}
            />
        </Routes>

        <body className="nucleotide">
        <Header />

        {/* site content renders here */}
        <main>
          <Routes>
            <Route path="/react-gh-pages" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route
              path="/react-gh-pages/crigenetics/"
              element={<CRIGenetics />}
            />
            <Route
              path="/react-gh-pages/foundry/"
              element={<Foundry />}
            />
            <Route
              path="/react-gh-pages/nucleotide/"
              element={<Nucleotide />}
            />

            
            <Route path="/react-gh-pages/yarden/" element={<Yarden />} />
            <Route path="/react-gh-pages/clicktool/" element={<Clicktool />} />
            <Route path="/react-gh-pages/covid/" element={<Covid />} />
          </Routes>
        </main>

        <ProjectSection />

          <Footer />
          </body>
      </BrowserRouter>
    </div>
  );
}

export default App;
