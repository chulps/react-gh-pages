// import "./styles.css";
import Header from "./COMPONENTS/HEADER/Header.js";
import Home from "./COMPONENTS/PAGES/Home.js";
import Resume from "./COMPONENTS/PAGES/Resume.js";
import Footer from "./COMPONENTS/FOOTER/Footer.js";

// import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div id="chuck" className="App nucleotide">
      <Header />

      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/react-gh-pages" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </BrowserRouter>
      </main>

      <Footer />
    </div>
  );
}

export default App;
