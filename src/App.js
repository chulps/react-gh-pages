// import "./styles.css";
import Header from "./COMPONENTS/HEADER/Header.js";
import Home from "./COMPONENTS/PAGES/HOME/Home.js";
import About from "./COMPONENTS/PAGES/About.js";
import CRIGenetics from "./COMPONENTS/PAGES/CRIGENETICS/CRIGenetics.js";
import Resume from "./COMPONENTS/PAGES/Resume.js";
import Footer from "./COMPONENTS/FOOTER/Footer.js";

// import { render } from "react-dom";
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
            <Route path="/resume" element={<Resume />} />
            <Route path="/about" element={<About />} />
            <Route path="/crigenetics" element={<CRIGenetics />} />
          </Routes>
        </BrowserRouter>
      </main>

      <Footer />
    </div>
  );
}

export default App;
