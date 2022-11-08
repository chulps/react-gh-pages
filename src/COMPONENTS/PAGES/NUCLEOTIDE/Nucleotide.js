import React, { Component } from "react";
import NucleotideLogo from "../../../IMG/nucleotide.svg";

class Nucleotide extends Component {

  componentDidMount() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  
  render() {
    return (
      <div
        id="nucleotide"
      >
        <section className="py3 h100">
          <div className="one-column md-two-columns">
            <div>
              <label>Project:</label>
              <h1>Nucleotide</h1>
              <p>
                Nucleotide is a design system built for the developers
                at CRI Genetics. It consists of three parts:
                <ol>
                  <li>A token based design system that can be used with simple classnames and ordinary html elements</li>
                  <li>An API</li>
                  <li>A React component library</li>
                </ol>
              </p>
            </div>
            <div
              className="flex-center flex-vertical"
              style={{ gap: "var(--unit2)" }}
            >
              <img height="50px" src={NucleotideLogo} alt="Nucleotide Logo"/>
              <div>
                <h4>🛠 I'm still working on this page...</h4>
              </div>
              <div className="flex">
                <a
                  href="http://nucleotide.crigenetics.com/ui/dev/index.html">
                  Documentation
                </a>
                {"  "}|{" "}
                <a href="https://codepen.io/chulps/pen/VwzGajp">Codepen</a>
              </div>
            </div>
          </div>
        </section>
      <section>

      </section>
          
      </div>
    );
  }
}

export default Nucleotide;
