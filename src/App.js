import Header from "./COMPONENTS/HEADER/Header.js";
import Home from "./COMPONENTS/PAGES/HOME/Home.js";
import About from "./COMPONENTS/PAGES/ABOUT/About.js";
import Nucleotide from "./COMPONENTS/PAGES/NUCLEOTIDE/Nucleotide.js";
import CRIGenetics from "./COMPONENTS/PAGES/CRIGENETICS/CRIGenetics.js";
import Yarden from "./COMPONENTS/PAGES/YARDEN/Yarden.js";
import Clicktool from "./COMPONENTS/PAGES/CLICKTOOL/Clicktool.js";
import Footer from "./COMPONENTS/FOOTER/Footer.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div id="chuck" className="App nucleotide">
      <Header />

      {/* site content renders here */}
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/react-gh-pages" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/react-gh-pages/about" element={<About />} />
            <Route
              path="//react-gh-pages/crigenetics"
              element={<CRIGenetics />}
            />
            <Route path="/react-gh-pages/nucleotide" element={<Nucleotide />} />
            <Route path="/react-gh-pages/yarden" element={<Yarden />} />
            <Route path="/react-gh-pages/clicktool" element={<Clicktool />} />
          </Routes>
        </BrowserRouter>
      </main>

      <Footer />
    </div>
  );
}

export default App;
